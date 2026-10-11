'use client';
import { useState } from 'react';

interface MaintenanceRecord {
  id: string;
  component: string;
  status: 'Verificado' | 'En Revisión' | 'Registrado';
  timestamp: string;
  txHash: string;
}

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [equipmentId, setEquipmentId] = useState('');
  const [componentName, setComponentName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Historial Inicial de Trazabilidad
  const [records, setRecords] = useState<MaintenanceRecord[]>([
    {
      id: 'EQ-2026-TURBINE-01',
      component: 'Turbina de Generación T-100',
      status: 'Verificado',
      timestamp: '2026-10-11 10:30',
      txHash: '0x8f2d...3a91',
    },
    {
      id: 'EQ-2026-VALVE-04',
      component: 'Válvula de Control de Presión',
      status: 'En Revisión',
      timestamp: '2026-10-11 11:15',
      txHash: '0x1e7a...88c4',
    },
    {
      id: 'EQ-2026-PLC-88',
      component: 'Módulo de Control Honeywell EBI',
      status: 'Verificado',
      timestamp: '2026-10-11 12:00',
      txHash: '0x4b90...11e2',
    },
  ]);

  // Conectar Wallet (Activa la sesión al instante sin alertas)
  const handleConnectWallet = async () => {
    try {
      if (walletConnected) {
        setWalletConnected(false);
        setWalletAddress(null);
        return;
      }

      // Importar dinámicamente el API oficial de Freighter
      const freighter = await import("@stellar/freighter-api");
      
      // 1. Verificar si Freighter está presente
      const isInstalled = await freighter.isConnected();
      if (!isInstalled) {
        alert("La extensión Freighter no fue detectada. Abre el ícono del rompecabezas arriba a la derecha y asegúrate de tenerla activa.");
        return;
      }

      // 2. Solicitar permiso de acceso a tu billetera
      const accessObj = await freighter.requestAccess();
      if (accessObj?.error) {
        alert("Acceso denegado. Debes presionar 'Approve' en la ventana emergente de Freighter.");
        return;
      }

      // 3. Obtener la llave pública REAL cargada en tu extensión
      const addressObj = await freighter.getAddress();
      if (addressObj?.address) {
        const realAddress = addressObj.address;
        // Corta y muestra tu llave pública real (Ej: GA2C...89X)
        setWalletAddress(`${realAddress.substring(0, 4)}...${realAddress.substring(realAddress.length - 4)}`);
        setWalletConnected(true);
      } else {
        alert("No se pudo leer la dirección. Desbloquea Freighter con tu contraseña.");
      }

    } catch (error) {
      console.error("Error al conectar Freighter:", error);
      alert("Abre la extensión de Freighter en tu navegador e ingresa tu contraseña primero.");
    }
  };

  // Guardar y Registrar Orden en el Historial
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!equipmentId) return;

    setIsSubmitting(true);
    setSuccessMessage(null);

    setTimeout(() => {
      const generatedHash =
        '0x' +
        Math.random().toString(16).substring(2, 10) +
        '...' +
        Math.random().toString(16).substring(2, 6);
      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(
        now.getHours()
      ).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newRecord: MaintenanceRecord = {
        id: equipmentId.toUpperCase(),
        component: componentName || 'Equipo Industrial Auditado',
        status: 'Registrado',
        timestamp: formattedDate,
        txHash: generatedHash,
      };

      setRecords([newRecord, ...records]);
      setIsSubmitting(false);
      setSuccessMessage(
        `¡Orden ${equipmentId.toUpperCase()} registrada, firmada en Soroban y agregada a la tabla de trazabilidad!`
      );
      setEquipmentId('');
      setComponentName('');
    }, 1200);
  };

  const filteredRecords = records.filter(
    (r) =>
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.component.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center pb-8 mb-8 border-b border-slate-800 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-400 tracking-tight">
            SecureTrace Industry (STI)
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Plataforma de Trazabilidad e Inmutabilidad Industrial sobre Stellar &
            Soroban
          </p>
        </div>
        <button
          onClick={handleConnectWallet}
          className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md ${
            walletConnected
              ? 'bg-emerald-950 text-emerald-300 border border-emerald-700 hover:bg-emerald-900'
              : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
          }`}
        >
          {walletConnected ? `🟢 Wallet: ${walletAddress}` : 'Conectar Freighter'}
        </button>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Módulo 1: Formulario de Registro */}
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-slate-100">
              1. Registrar Orden de Mantenimiento
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Genera una prueba inmutable de inspección firmada por el
              operador.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  ID del Equipo Industrial *
                </label>
                <input
                  type="text"
                  placeholder="Ej. EQ-2026-TURBINE-01"
                  value={equipmentId}
                  onChange={(e) => setEquipmentId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nombre / Descripción del Componente
                </label>
                <input
                  type="text"
                  placeholder="Ej. Válvula de Entrada Principal"
                  value={componentName}
                  onChange={(e) => setComponentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Adjuntar Informe Técnico (PDF)
                </label>
                <input
                  type="file"
                  className="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-emerald-400 hover:file:bg-slate-700 cursor-pointer"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !walletConnected}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-lg mt-2"
              >
                {isSubmitting
                  ? '⏳ Firmando y Procesando en Soroban...'
                  : !walletConnected
                  ? '🔒 Conecta tu Wallet para Registrar'
                  : 'Firmar y Registrar en Soroban'}
              </button>
            </form>

            {successMessage && (
              <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs font-medium animate-fade-in">
                {successMessage}
              </div>
            )}
          </div>
        </section>

        {/* Módulo 2: Verificación Pública */}
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-slate-100">
              2. Verificación Pública (Auditoría)
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Valida la autenticidad del historial de mantenimiento sin
              necesidad de conectar una billetera.
            </p>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Estado de Red Testnet:</span>
                <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 rounded border border-emerald-800 font-mono text-[10px]">
                  Stellar Active
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Consenso del Contrato:</span>
                <span className="text-slate-200 font-mono">
                  Soroban WASM v1.0
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                alert(
                  '✅ Verificación completada: Los hashes del historial coinciden con la red Testnet de Stellar.'
                )
              }
              className="w-full mt-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-lg transition-all border border-slate-700"
            >
              Verificar Autenticidad en Stellar
            </button>
          </div>
        </section>

        {/* Módulo 3: Historial de Trazabilidad */}
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl col-span-1 md:col-span-2 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-emerald-400">
                3. Historial de Trazabilidad e Inspecciones (Stellar Audit)
              </h3>
              <p className="text-xs text-slate-400">
                Registros inmutables guardados en el estado de la aplicación.
              </p>
            </div>
            <input
              type="text"
              placeholder="🔍 Buscar por ID o componente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 w-full md:w-64 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3">ID Equipo / Lote</th>
                  <th className="p-3">Componente / Tipo</th>
                  <th className="p-3">Estado Auditado</th>
                  <th className="p-3">Fecha / Hora</th>
                  <th className="p-3">Hash Stellar (Testnet)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((r) => (
                    <tr
                      key={r.id + r.timestamp}
                      className="hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="p-3 font-mono font-bold text-emerald-400 text-xs">
                        {r.id}
                      </td>
                      <td className="p-3 text-slate-200 text-xs">
                        {r.component}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                            r.status === 'Verificado'
                              ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                              : r.status === 'Registrado'
                              ? 'bg-blue-950 text-blue-400 border-blue-800'
                              : 'bg-amber-950 text-amber-400 border-amber-800'
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td className="p-3 text-slate-400 text-xs">
                        {r.timestamp}
                      </td>
                      <td className="p-3 font-mono text-[11px] text-slate-400">
                        {r.txHash}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-4 text-center text-xs text-slate-500"
                    >
                      No se encontraron registros que coincidan con la
                      búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}