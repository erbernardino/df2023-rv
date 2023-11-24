# Fase de build
FROM node:16-alpine as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Fase de produção com Nginx
FROM nginx:1.18.0-alpine as production

# Copia a configuração do Nginx e os arquivos construídos
COPY --from=builder /app/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Substitui a porta padrão do Nginx pela variável PORT no tempo de execução
RUN apk add --no-cache bash
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8080
CMD ["/entrypoint.sh"]