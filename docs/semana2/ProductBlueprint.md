# Product Blueprint

**Nombre del proyecto:** SecureTrace Industry (STI)

**Repositorio (enlace obligatorio):** [ProyectoBase](https://github.com/danielmaturana09/ProyectoBase/tree/main)

> Los campos marcados como *enlace obligatorio* deben ir como enlace en Markdown, con este formato: `[texto del enlace](https://...)`. Reemplacen el texto y la dirección de ejemplo.

---

## Contenido

1. Priorización de historias
2. Propuesta de valor
3. Flujo de usuario
4. Alcance del MVP
5. Lean Canvas
6. Backlog priorizado (Kanban)
7. Arquitectura inicial
8. Uso de Stellar y justificación

---

## 1. Priorización de historias

> Historias elegidas entre las que propuso el equipo y criterio con que se priorizaron. Son las que pasan al backlog. Extensión: breve.

**Criterio de priorización:** Escriban aquí el criterio (por ejemplo, imprescindible / debería / podría / queda fuera).

| Prioridad | Historia | Propuesta por | Por qué entra al backlog |
| :---: | --- | :---: | --- |
| 1 | Como Supervisor de Planta, quiero dar de alta un equipo industrial registrando su identificador único y especificaciones para crear su hoja de vida inalterable en la red. | Daniel Maturana | Es el punto de partida del sistema; sin el activo digitalizado en el contrato inteligente no existe objeto sobre el cual asociar mantenimientos. |
| 2 | Como Técnico de Servicio, quiero registrar una orden de mantenimiento (preventivo/correctivo) subiendo el hash del informe técnico, repuestos usados y mi firma digital para vincular la intervención al equipo sin posibilidad de alteración. | Karina Garay | Constituye el núcleo de la propuesta de valor: la stamping y prueba de existencia inmutable de la orden de servicio. |
| 3 | Como Auditor de Calidad o Representante de Aseguradora, quiero consultar el historial completo de un equipo mediante su ID y validar el hash de un PDF presentado, para verificar si el registro técnico ha sido modificado o falsificado tras una falla. | Daniel Maturana | Entrega la funcionalidad central de verificación pública e independiente con un solo clic para las partes que no confían entre sí. |
| 4 | Como Técnico de Servicio en campo, quiero cargar el informe de mantenimiento en PDF a través de una interfaz web que calcule el hash SHA-256 automáticamente en el navegador, para firmar digitalmente la intervención sin procesar hashes manualmente ni manejar conceptos criptográficos complejos. | Karina Garay | Es vital para la adopción: elimina la fricción de entrada calculando la huella digital del archivo de forma transparente en el cliente antes de la firma. |
| 5 | Como Supervisor de Planta, quiero asociar la dirección pública (public key) de un proveedor autorizado a un equipo, para restringir qué contratistas tienen permiso de registrar mantenimientos en los activos de la empresa. | Daniel Maturana | Añade una capa esencial de control de acceso e identidad para que terceros no autorizados no puedan emitir registros sobre los equipos. |

*(Agreguen o borren filas según las historias que pasen al backlog.)*

---

## 2. Propuesta de valor

> Qué resultado obtiene el usuario y por qué elegiría esta solución. En qué se diferencia de cómo resuelve hoy. Conecta con el usuario del Problem Brief. Extensión: 150–300 palabras en total.

**Usuario (del Problem Brief):** Supervisores de infraestructura, jefes de mantenimiento y directores de operaciones a cargo de maquinaria industrial y sistemas críticos.

**Resultado que obtiene:** Una hoja de vida digital, inalterable, neutral y con sello de tiempo verificado criptográficamente que respalda cada calibración, reemplazo de repuestos y mantenimiento ejecutado en sus activos.

**Por qué elegiría esta solución:** Porque elimina la vulnerabilidad de depender de archivos PDF editables o bases de datos centralizadas donde el proveedor o cliente puede modificar registros retroactivamente tras una falla. Le permite demostrar ante auditores, fabricantes y aseguradoras la validez irrefutable de sus procedimientos sin requerir peritajes ni litigios costosos.

**En qué se diferencia de cómo lo resuelve hoy:** Actualmente el historial se gestiona mediante actas impresas, planillas de Excel o módulos ERP/CMMS centralizados en los que la parte administradora puede editar la información a conveniencia. SecureTrace Industry descentraliza la prueba de autenticidad: la información técnica relevante se convierte en un hash SHA-256 guardado en un Smart Contract en Soroban (Stellar), garantizando que nadie pueda alterar la secuencia temporal ni el contenido de una orden de servicio.

---

## 3. Flujo de usuario

> Recorrido de la persona por la solución de principio a fin, roles y puntos de interacción. Diagrama o secuencia numerada. Extensión: 150–300 palabras.

| Paso | Rol | Qué hace | Punto de interacción |
| :---: | :---: | --- | --- |
| 1 | Supervisor de Planta | Conecta su billetera (Freighter) a la dApp y registra un nuevo equipo asignándole su identificador único (ID/Serie) y la dirección pública del proveedor técnico autorizado. | Interfaz Web (Next.js) / Billetera Freighter. / Smart Contract en Soroban. |
| 2 | Técnico de Servicio | Acude a la planta, ejecuta el mantenimiento correctivo/preventivo, genera el informe técnico en PDF y accede a la sección de registro de la dApp. | Interfaz Web / Formulario de carga de órdenes. |
| 3 | Técnico de Servicio | Adjunta el PDF en la web; la aplicación calcula localmente el hash SHA-256 del documento. El técnico aprueba y firma la transacción en Freighter para enviar la prueba a la red. | Módulo JS en cliente / Billetera Freighter / Red Stellar (Soroban). |
| 4 | Auditor / Aseguradora | Ingresa a la vista pública de auditoría de la dApp, digita el ID del equipo o arrastra el archivo PDF del informe entregado por las partes. | Dashboard público de verificación. |

*(Agreguen los pasos que hagan falta. Si prefieren, inserten aquí un diagrama.)*

---

## 4. Alcance del MVP

> Funcionalidad central separada de la deseable que queda fuera. Justificación de por qué el recorte sigue entregando valor. Extensión: 150–300 palabras en total.

| Dentro del MVP (funcionalidad central) | Fuera del MVP (deseable, para después) |
| --- | --- |
| Registro y alta de equipos industriales con identificador único por parte del supervisor. | Tokenización de activos industriales mediante estándares NFT (SEP-1) para representar la propiedad legal del equipo. |
| Gestión de permisos básica (asociación de claves públicas de proveedores autorizados por equipo). | Integración automatizada mediante sensores IoT u oráculos para captura de horas de uso y telemetría de fallas en tiempo real. |
| Generación de hash SHA-256 local del informe técnico e inserción inmutable en Soroban con sello de tiempo del ledger. | Almacenamiento descentralizado completo de archivos pesados de alta resolución en IPFS o Arweave. |

**Por qué el recorte sigue entregando valor:** Escriban aquí su respuesta.

El recorte estratégico se centra exclusivamente en resolver la causa raíz de la desconfianza: la autenticidad e inmutabilidad del registro de mantenimiento. Sin necesidad de desplegar sensores IoT costosos ni tokenizar activos complejos, el hash criptográfico guardado en Soroban junto con la firma del técnico y el sello de tiempo del ledger otorga certeza técnica y legal inmediata. Esto valida plenamente la hipótesis del proyecto reduciendo el tiempo de resolución de disputas de semanas a segundos con la menor fricción posible.

---

## 5. Lean Canvas

> Lienzo de una página con el modelo del producto. Extensión: enlace (obligatorio).

**Enlace al Lean Canvas (obligatorio):** [Lean Canvas del proyecto](https://canva.link/rd3cs23k1sea9w9)

El lienzo debe cubrir: problema, segmento de usuarios, propuesta de valor única, solución, canales, métricas clave, ventaja diferencial y estructura de costos e ingresos.

---

## 6. Backlog priorizado (Kanban)

> Enlace al tablero en GitHub Projects, construido con las historias priorizadas, en columnas y con criterios de aceptación por tarjeta. Extensión: enlace al tablero (obligatorio).

**Enlace al tablero (obligatorio):** [SecureTrace Industry - Kanban](https://github.com/users/danielmaturana09/projects/1/views/1)

---

## 7. Arquitectura inicial

> Cómo se conectan las partes (interfaz, lógica, Stellar) y en qué punto entra la red. Diagrama simple en imagen. Extensión: 150–300 palabras en total.

**Diagrama (imagen o enlace):** Escriban aquí el enlace o inserten la imagen.

| Capa | Componente | Qué hace |
| :---: | --- | --- |
| Interfaz | Next.js + Tailwind CSS. | Proporciona el panel para el alta de activos, el formulario de carga de informes para técnicos y el buscador/verificador público para auditores. Integra la biblioteca de Freighter para autenticación. |
| Lógica | Soroban SDK + JS Client. | Ejecuta la lógica del cliente en el navegador, procesa el cálculo del hash SHA-256 de los archivos PDF adjuntos y construye las llamadas a los métodos del Smart Contract. |
| Stellar | Smart Contract en Soroban (Rust). | Mantiene la estructura de datos del activo (EquipoID => List<MantenimientoRecord>), valida las firmas de los emisores autorizados y almacena de forma inalterable el hash y fecha del ledger. |

**En qué punto entra la red:** La red Stellar entra en acción en dos momentos clave dentro del flujo:

Fase de Escritura (Registro): Cuando el técnico o supervisor firma una transacción mediante Freighter para enviar la llamada al Smart Contract en Soroban, fijando en el ledger de Stellar la creación del activo o el hash del reporte con sello de tiempo oficial.

Fase de Lectura (Auditoría): Cuando el auditor o inspector consulta la dApp; el cliente realiza una llamada de solo lectura (read-only call) al estado del contrato en Soroban para traer los hashes históricos y contrastarlos localmente contra el PDF cargado.

---

## 8. Uso de Stellar y justificación

> Qué componentes de Stellar usaría y por qué cada uno. Apoyado en el criterio de pertinencia del Problem Brief. Extensión: 150–300 palabras en total.

**Criterio de pertinencia (del Problem Brief):**  Varias partes que no confían entre sí necesitan compartir un mismo registro inalterable con sello de tiempo, eliminando la posibilidad de que cualquiera de las entidades involucradas modifique la información histórica de forma retroactiva.

| Componente de Stellar | Para qué lo usamos | Por qué ese y no otra alternativa |
| --- | --- | --- |
| Soroban Smart Contracts (Rust). | Para programar la lógica de negocio descentralizada que controla el alta de equipos, el control de acceso por roles y el almacenamiento indexado de los hashes de mantenimiento. | Proporciona un entorno de ejecución WebAssembly (Wasm) seguro, ligero y determinista con soporte nativo en Rust. Permite manejar estructuras de datos personalizadas a costos de gas significativamente menores que EVM (Ethereum). |
| Sello de Tiempo Nativo del Ledger (Ledger Header Timestamp). | Como mecanismo de autenticación de identidad y firma criptográfica no custodia para técnicos y supervisores. | Es la billetera estándar nativa del ecosistema Stellar. Ofrece una experiencia de usuario fluida en el navegador, permitiendo la firma de transacciones de Soroban con altos estándares de seguridad. |
