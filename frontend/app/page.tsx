'use client';
import React, { useState } from 'react';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const [equipmentId, setEquipmentId] = useState('');
  const [fileHash, setFileHash] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);

  // Conectar Freighter Wallet
  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).freighter) {
      try {
        const pk = await (window as any).freighter.getPublicKey();
        setPublicKey(pk);
        setWalletConnected(true);
      } catch (e) {
        alert('Error al conectar con Freighter Wallet');
      }
    } else {
      alert('Instala la extensión Freighter Wallet en tu navegador.');
    }
  };

  // Calcular Hash SHA-256 en el cliente
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setFileHash(hashHex);
    }
  };

  // Verificación de auditoría (Simulación)
  const verifyReport = () => {
    if (!equipmentId || !fileHash) {
      alert('Ingresa el ID del equipo y sube el reporte PDF para verificar.');
      return;
    }
    setVerificationResult({
      status: 'VALID',
      timestamp: new Date().toLocaleString(),
      txHash: '0x3a9f...8f91',
      block: 4891201
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 pb-4 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-emerald-400">SecureTrace Industry (STI)</h1>
        <button 
          onClick={connectWallet}
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          {walletConnected ? `Conectado: ${publicKey.slice(0, 6)}...${publicKey.slice(-4)}` : 'Conectar Freighter'}
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Módulo 1: Stamping (Técnico) */}
        <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">1. Registrar Orden de Mantenimiento</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-slate-400">ID del Equipo Industrial</label>
              <input 
                type="text" 
                value={equipmentId}
                onChange={(e) => setEquipmentId(e.target.value)}
                placeholder="Ej. EQ-2026-TURBINE-01" 
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-400">Adjuntar Informe Técnico (PDF)</label>
              <input 
                type="file" 
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-emerald-500 file:text-white"
              />
            </div>
            {fileHash && (
              <div className="p-3 bg-slate-900 rounded border border-slate-700 break-all text-xs font-mono text-emerald-300">
                <strong>Hash SHA-256 Calculado:</strong> {fileHash}
              </div>
            )}
            <button 
              disabled={!walletConnected || !fileHash}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white py-2 rounded font-semibold transition"
            >
              Firmar y Registrar en Soroban
            </button>
          </div>
        </section>

        {/* Módulo 2: Verificación (Auditor) */}
        <section className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">2. Verificación Pública (Auditoría)</h2>
          <p className="text-sm text-slate-400 mb-4">Valida la autenticidad del historial sin necesidad de conectar una billetera.</p>
          <button 
            onClick={verifyReport}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded font-semibold transition mb-4"
          >
            Verificar Autenticidad en Stellar
          </button>

          {verificationResult && (
            <div className="p-4 bg-emerald-950 border border-emerald-500 rounded-lg">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">✔ DOCUMENTO VÁLIDO E INALTERADO</h3>
              <p className="text-sm text-slate-300"><strong>Fecha de Bloque:</strong> {verificationResult.timestamp}</p>
              <p className="text-sm text-slate-300"><strong>Bloque Stellar:</strong> {verificationResult.block}</p>
              <p className="text-xs font-mono text-slate-400 mt-2"><strong>Tx Hash:</strong> {verificationResult.txHash}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}