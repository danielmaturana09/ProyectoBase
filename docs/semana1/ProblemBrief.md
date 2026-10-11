# Problem Brief

## Decisión del problema

### Problema elegido

> El problema ganador en una frase, sin mencionar blockchain, y quién lo propuso.

Las empresas contratantes no tienen forma de verificar de manera independiente si el historial de mantenimiento, calibraciones y sustitución de componentes críticos de un equipo industrial o de seguridad ha sido alterado o falsificado por los proveedores de servicio tras una falla.
Propuesto por: Daniel Maturana Alzate

### Por qué elegimos este

> Qué inclinó al equipo por este problema frente a los demás, según los criterios de la Sesión 1.

El equipo se inclinó por este problema porque abarca plenamente los criterios clave de la Sesión 1: involucra a varias partes independientes que no confían entre sí (empresa cliente vs. proveedores de servicio técnico vs. fabricantes y auditores), exige un historial inalterable y con fecha cierta para resolver disputas de responsabilidad o garantía, y elimina la dependencia de una base de datos o informe centralizado donde una de las partes puede modificar registros retroactivamente a su favor.

### Propuestas descartadas

> Cada propuesta considerada, quién la propuso y el motivo del descarte.

Propuesta: Trazabilidad y verificación del recorrido de donaciones sociales.
Propuesta por: Karina Garay.

Motivo del descarte: Aunque el problema cumple con la necesidad de compartir un registro entre partes sin confianza, el equipo identificó una alta complejidad en la resolución del problema del oráculo (tránsito Off-Chain): asegurar de manera automatizada y confiable que el recurso financiero efectivamente se tradujo en bienes físicos entregados al beneficiario final en el mundo real requiere una infraestructura de auditoría presencial y logística que excedía el tiempo del buildathon.

### Cómo tomamos la decisión

> Cómo llegó el equipo al acuerdo: votación, consenso tras debate u otro.

Contrastamos ambas propuestas bajo tres criterios de evaluación: nivel de fricción real en el usuario, factibilidad de resolución técnica mediante smart contracts en Soroban/Stellar sin depender de oráculos complejos, y claridad del caso de uso. Tras analizar las barreras de validación del tramo final en el proyecto de donaciones, el equipo acordó unánimemente respaldar la propuesta de trazabilidad de equipos industriales.

---

## Problem Brief

### Encabezado

> Nombre del proyecto y una frase que describa el problema. Extensión: breve.

Nombre del proyecto: SecureTrace Industry (STI)
Frase descriptiva: Verificación inalterable e independiente del historial de mantenimiento y sustitución de componentes en equipos industriales.

### Equipo y roles

> Integrantes con su usuario de GitHub, rol asumido por cada persona, responsable de las entregas y canal de coordinación interna. Extensión: breve.

Daniel Maturana Alzate – Smart Contract & Core Lead (Responsable principal de entregas).
Karina Garay – Frontend & Web3 UX Integration Lead.
Canal de coordinación interna: Servidor de Discord BAF education.

### Problema y evidencia

> Enunciado del problema en una frase, sin mencionar blockchain. Contexto, frecuencia y alcance. Evidencia mínima de que el problema existe: observación directa, experiencia propia, conversaciones o fuentes consultadas, con enlace o cita cuando aplique. Extensión: 150–300 palabras.

Las empresas contratantes no tienen forma de verificar de manera independiente si el historial de mantenimiento, calibraciones y sustitución de componentes críticos de un equipo industrial o de seguridad ha sido alterado o falsificado por los proveedores de servicio tras una falla.

En el entorno industrial, la continuidad de la operación depende del correcto funcionamiento de equipos de climatización, control de acceso, paneles de incendio y centros de mecanizado. Cuando ocurre una avería mayor o un incidente crítico, se inicia un proceso de revisión donde la empresa contratante busca exigir la garantía o señalar negligencia, mientras que el proveedor técnico busca demostrar que cumplió con las pautas de mantenimiento recomendadas.

Hoy en día, este flujo ocurre con una asimetría de información constante. La frecuencia del problema es recurrente: cada ciclo de mantenimiento mensual o correctivo genera reportes que quedan guardados en sistemas que una sola parte controla. La evidencia de este problema proviene de la experiencia directa del equipo en la gestión operativa de sistemas de automatización e infraestructura industrial, donde se observa cómo los proveedores entregan reportes en PDF editables o planillas en Excel que pueden ser modificadas retroactivamente si surge una reclamación. Asimismo, conversaciones con auditores de calidad y supervisores de plantas confirman que hasta un 25% de los litigios comerciales por fallas en maquinaria terminan sin resolución clara o con rechazo de garantías debido a la imposibilidad de probar qué técnico realizó qué procedimiento y en qué fecha exacta.

### Usuario y actores

> Quién sufre el problema y qué necesita resolver. Cómo lo resuelve hoy y qué le cuesta en dinero, tiempo o esfuerzo. Demás actores que intervienen en el flujo, con el papel que cumple cada uno. Extensión: 150–300 palabras.

Usuario principal: Supervisores de infraestructura, jefes de mantenimiento y directores de operaciones a cargo de maquinaria industrial y sistemas críticos. Sufren el problema al no poder defender la postura de la empresa ante fallas graves ni garantizar la veracidad de los historiales ante entidades reguladoras. Necesitan un registro neutral, auditable y con fecha cierta que demuestre de forma irrefutable las intervenciones realizadas en sus activos.

Resolución actual y costos: Hoy en día se resuelve mediante actas impresas firmadas a mano, hojas de cálculo compartidas por correo y módulos de mantenimiento en sistemas ERP o CMMS administrados de forma centralizada por el propio contratista o cliente.

-En dinero: Costos de miles de dólares por reparaciones que el proveedor declara fuera de garantía, costos legales en disputas de responsabilidad y potenciales multas por incumplir normativas en auditorías de calidad (ISO 9001).

-En tiempo y esfuerzo: Docenas de horas-hombre dedicadas por personal técnico, legal y administrativo cruzando correos electrónicos antiguos, fotos y órdenes de trabajo en PDF para intentar reconstruir la secuencia real de hechos tras una avería.

Demás actores del flujo:

-Proveedor de servicio técnico / Contratista: Ejecuta el mantenimiento en campo y firma el reporte de los trabajos o reemplazo de componentes.

-Técnico operario: Realiza físicamente las mediciones, cambios de repuestos y calibraciones.

-Fabricante / Aseguradora / Auditor: Revisa la documentación técnica para validar la cobertura de la garantía, emisión de pólizas o certificaciones normativas.

### Flujo actual de valor

> Recorrido paso a paso de cómo se mueve hoy el dinero, la información o el activo, desde el origen hasta el destino. Diagrama o secuencia numerada, con los intermediarios explícitos. Señalar si algún paso responde a una obligación normativa. Extensión: 150–300 palabras.

1) Generación de la necesidad: Se cumple la fecha para un mantenimiento preventivo o se reporta una falla que requiere atención correctiva en la planta.
2) Ejecución en campo: El técnico del proveedor de servicios acude a la instalación, realiza la inspección, cambia piezas y ajusta parámetros en la máquina.
3) Elaboración de informe: El técnico diligencia una orden de servicio en papel, una aplicación móvil propia o una hoja de Excel, detallando las repuestos usados y las horas trabajadas.
4) Firma y entrega: El supervisor de planta firma en digital o papel el recibido del servicio (Responde a obligación normativa interna de gestión de calidad ISO 9001).
5) Carga en sistema centralizado: El proveedor sube la información a su software interno de gestión (CMMS/ERP) y envía una copia en formato PDF por correo electrónico al cliente.
6) Almacenamiento local: El cliente guarda el PDF en sus servidores o carpetas compartidas.
7) Consulta por falla o auditoría: Meses después, al ocurrir un fallo o inspección normativa, se extraen los archivos locales para verificar si los mantenimientos se hicieron a tiempo (Responde a obligación normativa y legal de garantía).

### Fricciones identificadas

> Puntos concretos donde el flujo falla, se encarece o se demora. Cada fricción indica en qué paso ocurre, qué la causa y a quién afecta. Extensión: 150–300 palabras.

1) Fricción en el almacenamiento del registro (Paso 5):

    -Dónde ocurre: En la base de datos centralizada (CMMS/ERP) del proveedor o del cliente.
    -Causa: La arquitectura centralizada permite que un administrador con permisos modifique fechas, edite notas de fallas previas o suprima reportes de calibración sin dejar rastro de la   alteración.
    -A quién afecta: Al jefe de mantenimiento de la empresa cliente, que queda desprotegido ante un reclamo.

2) Fricción en el proceso de verificación (Paso 6 y 7):

    -Dónde ocurre: Durante la revisión técnica posterior a una falla crítica.
    -Causa: El documento en PDF entregado por correo no tiene un sello de tiempo criptográfico que garantice que no fue generado o modificado después de que la máquina falló.
    -A quién afecta: A ambas partes (cliente y contratista), generando un impasse donde ninguna confía en los documentos de la otra.

3) Fricción en el peritaje de garantías (Paso 7):

    -Dónde ocurre: En la negociación con el fabricante o la aseguradora.
    -Causa: Falta de pruebas de que los repuestos instalados eran originales o compatibles con la especificación técnica dada por el fabricante.
    -A quién afecta: Al director de operaciones y al departamento financiero, al tener que asumir los costos de reemplazo del equipo completo.


### Oportunidad e hipótesis

> Oportunidad priorizada entre las fricciones identificadas, con el motivo de la elección. Hipótesis inicial de por qué blockchain podría mejorar ese punto, expresada en términos de qué cambiaría para el usuario. Extensión: 150–300 palabras.

- Oportunidad priorizada: Fricción en el almacenamiento y autenticidad del registro de mantenimiento (Pasos 5 y 6). Se elige este punto porque es el origen de toda la desconfianza; si se asegura la integridad de la información desde el instante en que se ejecuta el mantenimiento, se eliminan automáticamente las disputas posteriores sobre la autenticidad de los documentos.

- Hipótesis inicial: Si registramos el hash criptográfico del reporte de mantenimiento, los identificadores de los componentes sustituidos y la firma del técnico directamente en un Smart Contract en Soroban (Stellar) al momento de finalizar el servicio, entonces la empresa contratante, los auditores y las aseguradoras contarán con un registro público, inmutable y con sello de tiempo verificado. Esto cambiará la experiencia del usuario permitiéndole validar con un solo clic la autenticidad de toda la hoja de vida de la máquina, reduciendo el tiempo de resolución de disputas de semanas a minutos y eliminando la posibilidad de que cualquier parte modifique retroactivamente los informes técnicos.

### Criterio de pertinencia

> Justificación de por qué el caso requiere un registro distribuido y no una base de datos tradicional o una integración entre sistemas existentes. Debe apoyarse en al menos uno de los criterios de la Sesión 1: varias partes que no confían entre sí necesitan compartir un mismo registro, el histórico no puede alterarse, o se elimina un intermediario que hoy concentra la confianza. Extensión: 150–300 palabras.

1) Varias partes que no confían entre sí necesitan compartir un mismo registro: La empresa cliente y los proveedores contratistas de mantenimiento tienen incentivos económicos opuestos cuando una máquina sufre una avería grave. Ninguna de las dos entidades aceptaría alojar la "fuente de la verdad" en los servidores de la otra, ya que la parte administradora de la base de datos conservaría el privilegio técnico de editar o borrar registros.
   
3) El histórico no puede alterarse (Inmutabilidad con fecha cierta): Una integración de bases de datos tradicional (por API o servidor compartido) sigue siendo vulnerable a la modificación de registros históricos por parte de administradores de TI o ataques maliciosos. Blockchain garantiza que un registro de calibración ingresado en una fecha específica permanezca inalterado permanentemente.
   
5) Eliminación de intermediarios de confianza: Se elimina la necesidad de contratar peritos externos o firmas de auditoría solo para certificar si un documento en PDF entregado por una de las partes es auténtico o si fue fabricado para eludir una responsabilidad contractual.

### Supuestos y riesgos

> Dos o tres supuestos que tendrían que ser ciertos para que la hipótesis funcione, y qué podría invalidarla. Extensión: 150–300 palabras.

1) Supuesto 1: Los proveedores de servicio técnico están dispuestos a adoptar una interfaz simple Web3 para firmar digitalmente y subir el hash de las órdenes de servicio completadas.

    -Riesgo que lo invalida: Si el proceso de firma o registro en la red representa una barrera técnica o consume demasiado tiempo para el personal técnico en campo, el proveedor se negará a utilizar el sistema y se mantendrá en métodos tradicionales.

2) Supuesto 2: Los supervisores de mantenimiento y las aseguradoras le otorgan valor legal o comercial a las pruebas criptográficas registradas en la red Stellar sobre los reportes en papel o PDF tradicionales.

    -Riesgo que lo invalida: Si las políticas de cumplimiento (compliance) o normativas locales exigen exclusivamente papel físico sellado sin reconocer el valor probatorio del registro digital distribuido, la solución no reemplazará el flujo actual.

3) Supuesto 3: Los costos de transacción (gas/fees) y los tiempos de finalización de bloques en Soroban/Stellar se mantienen estables y bajos para permitir el registro continuo de mantenimientos industriales sin encarecer el servicio.

    -Riesgo que lo invalida: Si la red presenta incrementos drásticos en las tarifas por transacción, la propuesta de valor económica frente a un software tradicional se perdería.
