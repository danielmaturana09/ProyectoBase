# Product Blueprint & MVP Functional — SecureTrace Industry (STI)

* **Proyecto:** SecureTrace Industry (STI)
* **Red:** Stellar Testnet (Soroban Smart Contracts)
* **Repositorio:** [SecureTrace Industry GitHub Repository](https://github.com/tu-usuario/tu-repo)
* **Video Demo / Pitch:** [Ver Video Demo en YouTube/Loom](https://www.youtube.com/watch?v=ejemplo) 
* **Despliegue Web:** [https://securetrace-industry.vercel.app](https://securetrace-industry.vercel.app) 

---

## 1. Evidencia Verificable en Stellar Testnet

* **ID del Contrato Inteligente (Soroban):CAZFMNR7R3XZ6VWAMXLQM543GCJNDKF7CJFHFYQORIUKUTOFYWL7IMF5
* **Enlace al Contrato en el Explorador:** [Ver Contrato en StellarExpert Testnet]([https://stellar.expert/explorer/testnet/contract/CC...EXAMPLE](https://stellar.expert/explorer/testnet/contract/CAZFMNR7R3XZ6VWAMXLQM543GCJNDKF7CJFHFYQORIUKUTOFYWL7IMF5))
* **Transacción de Registro en Testnet:** [Ver Transacción en StellarExpert](https://stellar.expert/explorer/testnet/tx/0x...EXAMPLE)

---

## 2. Aprendizajes y Ajustes Priorizados

Durante el desarrollo e integración de SecureTrace Industry (STI), el equipo identificó aprendizajes clave relacionados con la interacción con la extensión Freighter, la serialización de datos en el entorno de ejecución WASM de Soroban y la gestión del estado en aplicaciones descentralizadas (dApps).

1. **Gestión de Sesiones con Freighter API:** Se aprendió que la detección y autorización de cuentas en la extensión de la billetera requiere un manejo estricto de excepciones y un flujo UX intuitivo, ya que bloqueos del navegador o intercepciones por billeteras nativas pueden interrumpir la firma de transacciones.
2. **Optimización de Estructuras en Soroban (Rust):** Comprender el almacenamiento de arreglos y diccionarios dentro del almacenamiento del contrato inteligente en Stellar exigió simplificar los tipos de datos a hashes compactos (SHA-256) en lugar de cadenas pesadas, optimizando el consumo de recursos de computación.
3. **Validación Criptográfica en Cliente:** El cálculo del hash SHA-256 local en el navegador del usuario antes de invocar la firma redujo a cero la transmisión de datos confidenciales o archivos pesados a la blockchain, logrando un equilibrio entre privacidad e inmutabilidad.

**Ajustes Priorizados para Cierre:**
* Integración fluida de alertas visuales de confirmación tras la firma en Testnet.
* Sincronización automática de la tabla de auditoría mediante eventos de lectura del contrato.

---

## 3. Riesgos y Pendientes

A pesar de lograr una dApp funcional sobre Stellar Testnet, el equipo ha clasificado los principales riesgos y elementos técnicos pendientes de cara a una futura fase de producción:

1. **Dependencia de la Extensión en Dispositivos Móviles (Riesgo Medio):** La interacción actual requiere la extensión de navegador Freighter. En entornos industriales de planta, donde los inspectores utilizan tabletas o terminales rugerizadas, la falta de soporte directo para extensiones de navegador tradicionales representa una barrera de adopción.
2. **Volatilidad y Gestión de Comisiones de Red (Riesgo Bajo):** Aunque las comisiones en Stellar son sumamente reducidas, una arquitectura en producción a gran escala requerirá implementar esquemas de transacciones patrocinadas (Fee Bumps) para que la empresa pague las comisiones de los operadores sin que estos necesiten saldo nativo (XLM).
3. **Escalabilidad del Almacenamiento Descentralizado (Pendiente):** Actualmente, la aplicación calcula el hash SHA-256 del informe en PDF en el cliente. Queda pendiente conectar un servicio de almacenamiento descentralizado como IPFS o Arweave (vía Pinata) para preservar la disponibilidad del archivo PDF original junto con su hash verificado.

---

## 4. Plan de Validación con Usuarios

**Público Objetivo (Problem Brief):**
Supervisores de infraestructura, jefes de mantenimiento industrial y directores de operaciones a cargo de maquinaria crítica en plantas de manufactura y energía.

**Métodos de Validación:**
* **Entrevistas Estructuradas y Pruebas Usabilidad (Pruebas Piloto):** Presentación del producto a 3 coordinadores de mantenimiento industrial para evaluar la tasa de éxito en el registro de órdenes sin asistencia técnica.
* **Prueba de Auditoría Ciega:** Entrega de un informe técnico en PDF junto con su registro en el explorador a un auditor externo para verificar si puede autenticar la inalterabilidad del documento en menos de 2 minutos.

**Hipótesis a Comprobar:**
1. *Hipótesis 1:* Los técnicos de planta prefieren una interfaz de sellado digital automática sobre el registro manual tradicional si la firma requiere menos de 3 clics.
2. *Hipótesis 2:* Los auditores y empresas aseguradoras aceptan los hashes guardados en Soroban/Stellar como prueba técnica válida para la resolución de disputas por fallas de equipo.

**Criterios de Éxito:**
* Reducción del tiempo de auditoría de mantenimientos de días a menos de 5 minutos.
* 100% de tasa de detección ante la modificación maliciosa de un archivo PDF alterado tras su registro.
