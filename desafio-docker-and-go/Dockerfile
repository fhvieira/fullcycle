FROM golang as builder
WORKDIR /app
COPY *.go /app
RUN go build -ldflags "-s -w" fullcycle.go

FROM scratch
WORKDIR /app
COPY --from=builder /app/fullcycle /app/fullcycle
CMD [ "/app/fullcycle" ]