# Historias de usuario individuales

**Nombre:** Karina Garay Ortiz

**Usuario de GitHub:** KarinaMaria26

---

## Mis historias de usuario

> Entre 5 y 7 historias en formato "como [rol] quiero [acción] para [beneficio]", pensadas desde distintos roles o necesidades del producto que el equipo está diseñando. Si escribes menos de 7, borra las líneas que no uses (mínimo 5).

1. Como Técnico de Servicio en campo, quiero cargar el informe de mantenimiento en PDF a través de una interfaz web que calcule el hash SHA-256 automáticamente en el navegador, para firmar digitalmente la intervención sin tener que procesar hashes manualmente ni manejar conceptos criptográficos complejos.
2. Como Supervisor de Planta, quiero conectar mi billetera Web3 (Freighter) con un solo clic y ver un panel con los equipos registrados y sus estados, para gestionar la trazabilidad de los activos de forma rápida y sin fricción técnica.
3. Como Auditor de Calidad, quiero un buscador público donde pueda arrastrar un archivo PDF de mantenimiento o ingresar el ID de la máquina, para obtener una verificación gráfica inmediata (Válido / Alterado) sin necesidad de conectar una billetera ni pagar tarifas.
4. Como Técnico de Servicio, quiero recibir una confirmación visual inmediata y el hash de transacción de Stellar al completar un registro, para tener certeza de que el reporte quedó correctamente asentado en la red antes de retirarme del sitio de trabajo.
5. Como Usuario de la dApp (Supervisor o Técnico), quiero ver alertas y mensajes de error claros cuando una transacción falle o la billetera Freighter no esté conectada, para saber exactamente qué acción correctiva debo tomar sin frustrarme en la interfaz.
6. Como Supervisor de Planta, quiero visualizar una línea de tiempo cronológica de las intervenciones registradas en la máquina con sus respectivos sellos de fecha, para auditar visualmente el cumplimiento del plan de mantenimiento preventivo.

## La más importante y por qué

> Organiza las historias de mayor a menor importancia: en la primera fila va la más importante. En cada fila indica el número de la historia y por qué la ubicaste en esa posición. Si usaste menos de 7 historias, borra las filas que sobren.

| Orden de importancia | Historia # | Por qué |
| :---: | :---: | --- |
| 1 (la más importante) | #1 | Es la historia más crítica de UX/UI e integración Web3. Si la dApp no abstrae la generación del hash SHA-256 dentro del cliente, los técnicos en campo enfrentarán una barrera de adopción insuperable al intentar utilizar la solución. |
| 2 | #3 | Permite la interacción directa de los auditores y partes externas sin fricción, ya que la verificación de validez de un documento debe ser pública y de un solo clic, sin requerir la configuración de billeteras. |
| 3 | #2 | Proporciona el punto de entrada principal para la gestión de la planta, permitiendo autenticarse mediante el estándar nativo de Stellar (Freighter) de manera fluida. |
| 4 | #4 | Aporta retroalimentación esencial para el usuario en campo, otorgando la certeza de que la llamada al contrato inteligente fue exitosa antes de dar por cerrada la orden. |
| 5 | #6 | Mejora la visualización y análisis de datos del activo para la toma de decisiones, aunque depende de que existan registros previos ingresados mediante las historias principales. |
| 6 (la menos importante) | #5 | Es una historia de refinamiento de la interfaz y manejo de excepciones que mejora la experiencia general del usuario, pero no define la funcionalidad central del MVP. |
