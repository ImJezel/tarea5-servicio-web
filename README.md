# Tarea 5: Servicio Web

Programación WEB – ITLA (2026-C-003)

Servicio web con Express (Node.js) que lista y almacena contactos usando el servicio `http://www.raydelto.org/agenda.php`.

```bash
npm install
npm start
```

| Método | Ruta         | Descripción                                          |
|--------|--------------|------------------------------------------------------|
| GET    | `/contactos` | Lista todos los contactos                            |
| POST   | `/contactos` | Guarda un contacto `{ nombre, apellido, telefono }`  |

Ejemplo:

```bash
curl -X POST http://localhost:3000/contactos -H "Content-Type: application/json" -d '{"nombre":"Juan","apellido":"Perez","telefono":"809-555-0000"}'
```
