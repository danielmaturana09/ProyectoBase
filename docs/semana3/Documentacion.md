# Entregable Semana 3: Functional Proof (Prueba Funcional MVP)
**Proyecto:** SecureTrace Industry
**Repositorio:** [danielmaturana09/ProyectoBase](https://github.com/danielmaturana09/ProyectoBase)

---

## 1. Front Construido (MVP)

Para esta etapa del proyecto desarrollamos la interfaz de usuario funcional (MVP) del sistema **SecureTrace Industry** utilizando **Next.js** y **Tailwind CSS**, ubicada en la carpeta `/frontend` de nuestro repositorio.

### Vistas e Interfaz
- **Dashboard Principal:** Vista interactiva orientada al monitoreo en tiempo real de lotes y activos industriales.
- **Registro y Trazabilidad:** Formulario dinámico para el registro de eventos de la cadena de suministro y la gestión de firmas y estados de activos.
- **Conexión de Wallet / Interacción:** Interfaz adaptada para permitir la interacción futura con billeteras del ecosistema Stellar (Freighter) para la validación de registros.

---

## 2. Decisión Técnica: Arquitectura e Integración Blockchain

Para la gestión de traza y registro inmutable de SecureTrace Industry, evaluamos las dos rutas técnicas ofrecidas por la plataforma Stellar:

### Opción Seleccionada: Opción A (Contrato Inteligente propio en Soroban)
- **Justificación:** Dado que SecureTrace Industry gestiona la trazabilidad detallada de componentes y controles de acceso/auditoría industrial, requerimos lógica personalizada para asociar metadatos, estados de validación y eventos multi-firma.
- **Implementación futura (Semana 4):** Desarrollaremos un Smart Contract en Rust utilizando el SDK de Soroban, compilándolo a WASM para su despliegue en la Testnet de Stellar.

---

## 3. Participación del Equipo

| Integrante | Usuario de GitHub | Contribución en el Entregable 3 |
| :--- | :--- | :--- |
| **Daniel Maturana** | `@danielmaturana09` | Configuración de la estructura general, maquetación de vistas en Next.js, integración de Tailwind CSS y documentación técnica. |
| **Karina Garay** | `@KarinaGaray` | Revisión del flujo UX/UI del frontend, alineación con el Product Blueprint de la Semana 2 y documentación de requerimientos funcionales. |

---

## 4. Bloqueos y Siguientes Pasos

- **Retos y Bloqueos:** Desafíos menores en el acoplamiento inicial de componentes y estructuración de la carpeta `frontend`.
- **Siguiente Paso:** Inicializar el entorno con `stellar CLI`, escribir la lógica base del contrato en Rust (Soroban) y conectar la interfaz cliente con las invocaciones de red en Testnet.

---

## 5. Guía de Ejecución Local

Para levantar la interfaz en tu entorno local:

```bash
# 1. Navegar a la carpeta del frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Ejecutar el servidor de desarrollo
npm run dev
