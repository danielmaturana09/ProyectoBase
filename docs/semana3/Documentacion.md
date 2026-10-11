# Entregable Semana 3: Functional Proof (Prueba Funcional MVP)
**Proyecto:** SecureTrace Industry

---

## 1. Front Construido (MVP)

Para esta etapa del proyecto desarrollamos la interfaz de usuario funcional (MVP) del sistema **SecureTrace Industry** utilizando **Next.js** y **Tailwind CSS**, ubicada en la carpeta `/frontend` de nuestro repositorio.

### Vistas e Interfaz
- **Dashboard Principal:** Vista interactiva orientada al monitoreo en tiempo real de lotes y activos industriales.
- **Registro y Trazabilidad:** Formulario dinámico para el registro de eventos de la cadena de suministro y la gestión de firmas y estados de activos.
- **Conexión de Wallet / Interacción:** Interfaz adaptada para permitir la interacción futura con billeteras del ecosistema Stellar (como Freighter) para la firma y validación de registros.

---

## 2. Decisión Técnica: Arquitectura e Integración Blockchain

Para la gestión de traza y registro inmutable de SecureTrace Industry, evaluamos las dos rutas técnicas ofrecidas por la plataforma Stellar:

### Opción Seleccionada: Opción A (Contrato Inteligente propio en Soroban)
- **Justificación:** Dado que SecureTrace Industry gestiona la trazabilidad detallada de componentes y controles de acceso/auditoría industrial, requerimos lógica personalizada para asociar metadatos, estados de validación y eventos multi-firma.
- **Implementación futura:** Desarrollaremos un Smart Contract en Rust utilizando el SDK de Soroban, compilándolo a WASM para su despliegue en la Testnet de Stellar.

---

## 3. Participación del Equipo

| Integrante | Usuario de GitHub | Contribución en el Entregable 3 |
| :--- | :--- | :--- |
| **Daniel Maturana** | `@danielmaturana09` | Configuración de la estructura general, maquetación de vistas en Next.js, integración de Tailwind CSS y documentación técnica. |
| **Karina Garay** | `@KarinaMaria26` | Revisión del flujo UX/UI del frontend, alineación con el Product Blueprint de la Semana 2 y documentación de requerimientos funcionales. |

---

## 4. Bloqueos y Siguientes Pasos

- **Retos y Bloqueos:** Desafíos menores en el acoplamiento inicial de componentes de Next.js y la estructuración del directorio `/frontend`.
- **Siguiente Paso (Semana 4):**
  1. Configuración e inicialización del entorno con `stellar CLI`.
  2. Escritura de la lógica base del contrato en Rust (Soroban) y compilación a WASM.
  3. Conexión e integración del cliente frontend con las invocaciones del contrato en la Testnet mediante el SDK de JavaScript/TypeScript.

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
