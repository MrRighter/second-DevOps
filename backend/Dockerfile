# ---------- Этап 1: сборка ----------
FROM golang:1.22-alpine AS builder
WORKDIR /build

# Копируем ТОЛЬКО go.mod
COPY go.mod ./

# Скачиваем зависимости в кэш
RUN go mod download

# Только потом исходники
COPY . .

# Собираем бинарник (флаг -mod=mod разрешает создать go.sum)
RUN CGO_ENABLED=0 GOOS=linux go build -mod=mod -ldflags="-s -w" -o /out/app ./main.go

# ---------- Этап 2: исполнение ----------
FROM gcr.io/distroless/static-debian12:nonroot

WORKDIR /app
COPY --from=builder /out/app /app/app

EXPOSE 8080

ENTRYPOINT ["/app/app"]
