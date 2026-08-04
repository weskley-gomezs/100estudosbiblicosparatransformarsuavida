import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Lock, CheckCircle2, QrCode, CreditCard, Copy, Download, Sparkles, BookOpen } from 'lucide-react';
import { GoldButton } from './GoldButton';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  const mockPixCode = '00020126580014BR.GOV.BCB.PIX0136a8e99b00-4b92-4112-8f92-9100estudos1990520400005303986540519.905802BR5925100 ESTUDOS BIBLICOS DIGITAL6009SAO PAULO62070503***6304D1A2';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Ambiente de Pagamento Seguro</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-title text-white">
                  Garantir Meus 100 Estudos
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Preencha seus dados para receber o PDF imediatamente no e-mail.
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="bg-slate-950/80 border border-amber-500/20 rounded-2xl p-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.imgur.com/navyo9O.png"
                    alt="Ebook 100 Estudos Bíblicos"
                    className="w-12 h-16 object-cover rounded-lg border border-amber-500/30 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-white font-sans-body">
                      Ebook 100 Estudos Bíblicos
                    </h4>
                    <span className="text-xs text-emerald-400 font-semibold">PDF Digital • Acesso Vitalício</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through block">R$ 97,00</span>
                  <span className="text-xl font-extrabold gold-gradient-text">R$ 19,90</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    paymentMethod === 'pix'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>PIX (Aprovação Imediata)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>

              {/* Customer Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Seu Melhor E-mail (Onde receberá o PDF) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    WhatsApp / Telefone (Opcional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white outline-none"
                  />
                </div>

                {paymentMethod === 'card' && (
                  <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-3">
                    <p className="text-xs text-amber-300 font-semibold">Simulação de Cartão de Crédito:</p>
                    <input
                      type="text"
                      placeholder="Número do Cartão"
                      defaultValue="4532 •••• •••• 8821"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM/AA"
                        defaultValue="12/28"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        defaultValue="782"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <GoldButton
                    size="large"
                    fullWidth
                    icon={false}
                    subtext="Criptografia SSL 256 bits • Envio Automático"
                  >
                    {isSubmitting ? 'PROCESSANDO...' : 'CONCLUIR PEDIDO POR R$ 19,90'}
                  </GoldButton>
                </div>
              </form>
            </div>
          ) : (
            /* Success Order View */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif-title text-white">
                  Parabéns, {name || 'Irmão(ã)'}!
                </h3>
                <p className="text-sm text-emerald-400 font-bold mt-1">
                  Seu pagamento de R$ 19,90 foi confirmado com sucesso!
                </p>
                <p className="text-xs text-slate-300 mt-2">
                  Enviamos o link de download para <strong>{email || 'seu e-mail'}</strong>.
                </p>
              </div>

              {/* PIX Copy or Direct PDF Download Box */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-center gap-2 text-amber-300 text-sm font-bold">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Seu Ebook Digital Está Pronto</span>
                </div>

                <a
                  href="/src/assets/images/ebook_cover_mockup_1785881549605.jpg"
                  download="100-Estudos-Biblicos-Para-Transformar-Sua-Vida.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 rounded-xl gold-gradient-bg text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-xl hover:opacity-90 transition-opacity block text-center"
                >
                  <Download className="w-5 h-5" />
                  <span>BAIXAR EBOOK EM PDF AGORA</span>
                </a>

                {paymentMethod === 'pix' && (
                  <div className="pt-2 border-t border-slate-800">
                    <span className="block text-[11px] text-slate-400 mb-2">Código PIX Copia e Cola (para referência):</span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="w-full py-2 px-3 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-amber-300 truncate flex items-center justify-between gap-2 hover:bg-slate-800 cursor-pointer"
                    >
                      <span className="truncate">{mockPixCode}</span>
                      <Copy className="w-4 h-4 shrink-0 text-amber-400" />
                    </button>
                    {copiedPix && <span className="text-[10px] text-emerald-400 block mt-1">✓ Código PIX copiado!</span>}
                  </div>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
