import React, { useState } from 'react';
import {
    BookOpen, Target, Zap, Users, Star, ChevronDown, ArrowRight, Menu, X,
    Compass, Layers, GitMerge, BarChart2, Activity, CheckCircle, AlertTriangle
} from 'lucide-react';
import FlashcardSection from './FlashcardSection';

const LandingPageMetodologia = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Product Innovation Ops
                    </div>

                    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
                        <button onClick={() => scrollToSection('methodology')} className="hover:text-white transition-colors">Metodologia</button>
                        <button onClick={() => scrollToSection('ambidexterity')} className="hover:text-white transition-colors">Ambidestria</button>
                        <button onClick={() => scrollToSection('demands')} className="hover:text-white transition-colors">Demandas</button>
                        <button onClick={() => scrollToSection('prioritization')} className="hover:text-white transition-colors">Priorização</button>
                        <button onClick={() => scrollToSection('monitoring')} className="hover:text-white transition-colors">Monitoramento</button>
                    </div>

                    <button
                        onClick={() => window.open('https://pay.hotmart.com/Y100672606O?off=7hg3ynoe&bid=1763939263599', '_blank')}
                        className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
                    >
                        Garantir meu exemplar
                    </button>

                    <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4">
                        <button onClick={() => scrollToSection('methodology')} className="text-left text-slate-300">Metodologia</button>
                        <button onClick={() => scrollToSection('ambidexterity')} className="text-left text-slate-300">Ambidestria</button>
                        <button onClick={() => scrollToSection('demands')} className="text-left text-slate-300">Demandas</button>
                        <button onClick={() => scrollToSection('prioritization')} className="text-left text-slate-300">Priorização</button>
                        <button onClick={() => scrollToSection('monitoring')} className="text-left text-slate-300">Monitoramento</button>
                        <button
                            onClick={() => window.open('https://pay.hotmart.com/Y100672606O?off=7hg3ynoe&bid=1763939263599', '_blank')}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
                        >
                            Garantir meu exemplar
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                            <Star className="w-4 h-4 fill-blue-400" />
                            <span>Metodologia Exclusiva</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Product Innovation Ops: <span className="text-blue-400">A Metodologia</span>
                        </h1>

                        <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                            Como entregar produtos singulares com equilíbrio entre Inovação, Execução e Dados. Uma abordagem prática e ambidestra para a gestão de produtos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open('https://pay.hotmart.com/Y100672606O?off=7hg3ynoe&bid=1763939263599', '_blank')}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                Quero garantir minha transformação
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="relative group perspective-1000">
                        <div className="relative w-3/4 mx-auto md:w-full max-w-md transform group-hover:rotate-y-6 transition-transform duration-500">
                            <img
                                src="/images/book.png"
                                alt="Product Innovation Ops - Capa do Livro"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </div>
                        {/* Shadow */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/50 blur-xl rounded-full" />
                    </div>
                </div>
            </section>

            {/* Metodologia Central */}
            <section id="methodology" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Metodologia Central e Frameworks</h2>
                        <p className="text-slate-400 text-lg">O cerne da abordagem: Yoham e Bolero.Digital</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Compass className="text-blue-400" />
                                Metodologia Yoham
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                <strong>You on Hybrid Ambidexterity Management.</strong> O cerne da abordagem mais recente, focada na gestão híbrida e ambidestra, equilibrando a necessidade de inovar com a eficiência operacional.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Activity className="text-purple-400" />
                                Framework Bolero.Digital
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                Também chamado de <strong>"a cadência"</strong>. Estrutura a inovação como um processo contínuo, garantindo que o ritmo da entrega acompanhe a estratégia do negócio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ambidestria Estratégica */}
            <section id="ambidexterity" className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ambidestria Estratégica</h2>
                        <p className="text-slate-400 text-lg">O equilíbrio vital entre Explorar e Explotar</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 p-8 rounded-2xl border border-blue-500/20">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                                <Compass className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Explorar (Descoberta)</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span>Focado em P&D, prototipação e validação.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span>Busca resolver problemas novos (desbravar a floresta).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                    <span>Demanda de <strong>Definição</strong> (pesquisa, estudo).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 p-8 rounded-2xl border border-purple-500/20">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                                <Layers className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Explotar (Eficiência)</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                                    <span>Focado em otimização e melhorias incrementais.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                                    <span>Execução eficiente do que já se conhece.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                                    <span>Demanda de <strong>Implementação</strong> (funcionalidade, produto).</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gestão de Demandas */}
            <section id="demands" className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Gestão de Demandas: Funil e TAM</h2>
                        <p className="text-slate-400 text-lg">Conectando o propósito da empresa às ações diárias.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "Propósito (MTP)", desc: "Razão de existir da organização (contínuo/infinito)." },
                            { title: "Objetivos-Alvo", desc: "Declarações concretas da direção desejada (1 ano+)." },
                            { title: "Resultados-Chave (KRs)", desc: "Métricas trimestrais/semestrais para medir progresso." },
                            { title: "TAMs (Tasks, Actions, Movements)", desc: "O cerne da gestão operacional: Iniciativas, Tarefas e Follow-ups." }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">{item.title}</h3>
                                    <p className="text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-slate-950 rounded-2xl border border-slate-800">
                        <h3 className="text-xl font-bold text-white mb-4">O Coração da Metodologia: TAM</h3>
                        <p className="text-slate-300 mb-4">
                            Task Allocation Matrix é um esforço estruturado para qualificar e classificar demandas.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {['OKR', 'Problemas/Oportunidades', 'Priorização BORA', 'RACI', '2W2H', 'Classificação GTM', 'Tipo (Definição/Implementação)'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/images/TAM.png"
                                alt="Os 7 passos da TAM (Task Allocation Matrix)"
                                className="rounded-lg shadow-lg border border-slate-800 max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Priorização BORA */}
            <section id="prioritization" className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Priorização BORA</h2>
                        <p className="text-slate-400 text-lg">Baseado em RICE e WSJF, com foco econômico.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                            <div className="text-3xl font-bold text-white mb-2">RICE</div>
                            <p className="text-slate-400 text-sm">Confiança (Confidence) + Alcance + Impacto</p>
                        </div>
                        <div className="flex items-center justify-center text-slate-500 font-bold text-2xl">+</div>
                        <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-center">
                            <div className="text-3xl font-bold text-white mb-2">WSJF</div>
                            <p className="text-slate-400 text-sm">Criticidade de Tempo (Time Criticality)</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-2xl border border-green-500/20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">O Diferencial: CoD (Custo de Atraso)</h3>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Critério de desempate e proxy econômico para forçar decisões objetivas. Mede o impacto financeiro de não realizar ou atrasar uma entrega.
                        </p>
                    </div>
                </div>
            </section>

            {/* Flashcards Section */}
            <FlashcardSection />

            {/* Gestão do Fluxo e Discovery */}
            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Gestão do Fluxo e Discovery</h2>
                        <p className="text-slate-400 text-lg">Processo visual e iterativo de inovação.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-2">Discovery (Descoberta)</h3>
                                <p className="text-slate-400 text-sm mb-4">Identificar e validar problemas e hipóteses.</p>
                                <div className="flex items-start gap-2 text-sm text-slate-300">
                                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />
                                    <span><strong>Validation Board:</strong> Testar hipóteses sobre cliente e problema.</span>
                                </div>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-2">Especificação</h3>
                                <p className="text-slate-400 text-sm mb-4">Linguagens para alinhar entendimento.</p>
                                <div className="space-y-2 text-sm text-slate-300">
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Features Canvas (Visual)</div>
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Gherkin (Given-When-Then)</div>
                                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>PRD (Estratégico)</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-2">A3 Report</h3>
                                <p className="text-slate-400 text-sm">
                                    Ferramenta de gestão visual (Toyota) para resolução de problemas complexos: contexto, causa raiz e contramedidas.
                                </p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-2">A4Ws</h3>
                                <p className="text-slate-400 text-sm">
                                    Adaptação do OPPM. Canvas para planejamento restrito e visual de <strong>4 semanas</strong> de entregas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Semântica e Monitoramento */}
            <section id="monitoring" className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Semântica */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Semântica da Entrega</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-blue-400 mb-2">Releases (Maturidade)</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Alpha (Interno)', 'Beta (Restrito)', 'RC (Candidato)', 'GA (Lançamento)'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-400 mb-2">Fases (Status)</h3>
                                    <p className="text-slate-400 text-sm mb-2">18 etapas detalhadas no ciclo de valor, de "Ideia" a "Feito", para identificar gargalos.</p>
                                </div>
                            </div>
                        </div>

                        {/* Monitoramento */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Monitoramento e Métricas</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <BarChart2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-white">Taxa de Inovação vs. Manutenção</h3>
                                        <p className="text-slate-400 text-sm">Ideal: 70% Inovação (Início) → 70% Operação (Maturidade).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <GitMerge className="w-8 h-8 text-purple-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-white">Diagrama de Fluxo Cumulativo (CFD)</h3>
                                        <p className="text-slate-400 text-sm">Mede Lead Time, Work Time e WIP para achar gargalos.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Target className="w-8 h-8 text-red-400 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-white">Método AAARRR (Funil do Pirata)</h3>
                                        <p className="text-slate-400 text-sm">Awareness, Acquisition, Activation, Retention, Revenue, Referral.</p>
                                        <p className="text-xs text-slate-500 mt-1">PCS (Ponto Crítico de Sucesso): Onde o cliente percebe valor real.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tópicos Abordados */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos os Tópicos Abordados</h2>
                        <p className="text-slate-400">Uma visão completa do conteúdo do livro.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                        <ul className="space-y-2">
                            <li>• Introdução à gestão de produtos.</li>
                            <li>• Organização do fluxo da inovação em produtos digitais.</li>
                            <li>• Roadmapping: O processo de desenvolvimento do roadmap.</li>
                            <li>• Visão do Ciclo de Desenvolvimento do Produto.</li>
                            <li>• Entendendo as partes do roadmap.</li>
                            <li>• Modelo de distribuição demandas.</li>
                            <li>• Classificando Tarefas, Iniciativas e Follow-ups.</li>
                            <li>• Ambidestria Estratégica: Explorar e Explotar.</li>
                            <li>• Classificação Ambidestra: Definir(ção) e Implementar(ção).</li>
                            <li>• POps: Product Operations - a procura da batida perfeita.</li>
                            <li>• DISCOVERY.</li>
                            <li>• TAM (Task Allocation Matrix).</li>
                            <li>• RELEASES - a semântica da entrega.</li>
                            <li>• FASES - fases ou status.</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>• BORA - priorização com base em RICE e WSJF.</li>
                            <li>• Critérios do BORA.</li>
                            <li>• Prestação de contas.</li>
                            <li>• Ciclo de vida do produto à maturidade.</li>
                            <li>• Tempo médio para introdução e receita.</li>
                            <li>• Composição de custo médio de uma squad (somente pessoas).</li>
                            <li>• Árvore de Oportunidade.</li>
                            <li>• Batidão: em busca da batida perfeita.</li>
                            <li>• A3 Report.</li>
                            <li>• A4W's - As 4 semanas.</li>
                            <li>• Product analytics.</li>
                            <li>• Método AAARRR (Dave McClure).</li>
                            <li>• Ponto Crítico de Sucesso (PCS).</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5"></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Domine a Gestão de Produtos
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Adquira a metodologia completa e transforme sua carreira hoje mesmo.
                    </p>

                    <a
                        href="https://pay.hotmart.com/Y100672606O?off=7hg3ynoe&bid=1763939263599"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-green-600 hover:bg-green-500 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 shadow-2xl shadow-green-500/30 flex items-center justify-center gap-3 mx-auto"
                    >
                        Quero garantir minha transformação
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </div>
            </section>


            {/* Footer */}
            <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <div className="container mx-auto px-4">
                    <p>&copy; 2024 Product Innovation Ops. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPageMetodologia;
