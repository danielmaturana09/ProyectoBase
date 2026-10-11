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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Lista inicial de registros (Mock Data)
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

  // Conectar Wallet (Simulación Freighter)
  const handleConnectWallet = () => {
    if (walletConnected) {
      setWalletConnected(false);
      setWalletAddress(null);
    } else {
      setWalletConnected(true);
      setWalletAddress('GAYO...3K7L');
    }
  };

  // Registrar nueva orden
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!equipmentId) return;

    setIsSubmitting(true);
    setSuccessMessage(null);

    setTimeout(() => {
      const randomHash = '0x' + Math.random().toString(16).substring(2, 10) + '...' + Math.random().toString(16).substring(2, 6);
      const newRecord: MaintenanceRecord = {
        id: equipmentId.toUpperCase(),
        component: 'Equipo Industrial Auditado',
        status: 'Registrado',
        timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
        txHash: randomHash,
      };

      setRecords([newRecord, ...records]);
      setIsSubmitting(false);
      setSuccessMessage(`¡Orden ${equipmentId.toUpperCase()} registrada y firmada exitosamente en Testnet!`);
      setEquipmentId('');
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
            Plataforma de Trazabilidad e Inmutabilidad Industrial sobre Stellar & Soroban
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
        {/* Módulo 1: Registrar Orden */}
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2 text-slate-100">
              1. Registrar Orden de Mantenimiento
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Genera una prueba inmutable de inspección firmada por el operador.
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
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-semibold text-sm rounded-lg transition-all shadow-lg mt-2"
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
              Valida la autenticidad del historial de mantenimiento sin necesidad de conectar una billetera.
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
                <span className="text-slate-200 font-mono">Soroban WASM v1.0</span>
              </div>
            </div>

            <button
              onClick={() => alert('✅ Estado de la red auditado: Todos los bloques y hashes de SecureTrace Industry concuerdan.')}
              className="w-full mt-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-md"
            >
              Verificar Autenticidad en Stellar
            </button>
          </div>
        </section>

        {/* Módulo 3: Historial de Trazabilidad e Inspecciones */}
        <section className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl col-span-1 md:col-span-2 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-emerald-400">
                3. Historial de Trazabilidad e Inspecciones (Stellar Audit)
              </h3>
              <p className="text-xs text-slate-400">
                Registros inmutables alojados en la blockchain.
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
                    <tr key={r.id + r.timestamp} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono font-bold text-emerald-400 text-xs">{r.id}</td>
                      <td className="p-3 text-slate-200 text-xs">{r.component}</td>
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
                      <td className="p-3 text-slate-400 text-xs">{r.timestamp}</td>
                      <td className="p-3 font-mono text-[11px] text-slate-400">{r.txHash}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-xs text-slate-500">
                      No se encontraron registros que coincidan con la búsqueda.
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