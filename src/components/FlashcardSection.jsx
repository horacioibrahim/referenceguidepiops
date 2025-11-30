import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Download, MessageSquare } from 'lucide-react';

const FlashcardSection = () => {
    const [cards, setCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [loading, setLoading] = useState(true);
    const cardRef = useRef(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('/flashcards.csv');
                const text = await response.text();
                const parsedCards = parseCSV(text);
                setCards(parsedCards);
                setLoading(false);
            } catch (error) {
                console.error('Error loading flashcards:', error);
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault(); // Prevent scrolling
                setIsFlipped(prev => !prev);
            } else if (e.code === 'ArrowRight') {
                handleNext();
            } else if (e.code === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, cards.length]); // Dependencies for correct state access if needed, though functional updates handle most

    const parseCSV = (csvText) => {
        const lines = csvText.split('\n').filter(line => line.trim() !== '');
        // Regex to match CSV fields, handling quoted strings with commas
        // This regex matches:
        // 1. Quoted string: "..." (capturing content inside quotes)
        // 2. Non-quoted string: anything until comma or end of line
        const regex = /(?:^|,)(?:"([^"]*)"|([^",]*))/g;

        return lines.map(line => {
            const matches = [];
            let match;
            // Reset regex index for each line
            regex.lastIndex = 0;

            // We need to loop to find all matches in the line
            // However, a simple split by comma doesn't work for quoted commas.
            // A robust CSV parser is complex, but for this specific file structure:
            // It seems to be 2 columns. We can try a simpler approach if the regex is tricky.

            // Alternative simple parser for 2 columns:
            // 1. Check if starts with quote.
            // 2. Find split point.

            // Let's use a slightly more robust manual parse for this specific 2-column format
            const parts = [];
            let current = '';
            let inQuote = false;

            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (char === '"') {
                    inQuote = !inQuote;
                } else if (char === ',' && !inQuote) {
                    parts.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            parts.push(current.trim());

            // Clean up quotes
            const clean = (str) => {
                if (str.startsWith('"') && str.endsWith('"')) {
                    return str.slice(1, -1).replace(/""/g, '"');
                }
                return str;
            };

            if (parts.length >= 2) {
                return {
                    question: clean(parts[0]),
                    answer: clean(parts.slice(1).join(',')) // Join back if extra commas split incorrectly (though logic above handles it)
                };
            }
            return null;
        }).filter(card => card !== null);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 200); // Wait for flip back if needed, or just instant. Let's do instant for responsiveness or small delay
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }, 200);
    };

    const handleRestart = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex(0);
        }, 200);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/flashcards.csv';
        link.download = 'flashcards.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return <div className="py-20 text-center text-slate-400">Carregando flashcards...</div>;
    }

    if (cards.length === 0) {
        return <div className="py-20 text-center text-slate-400">Nenhum flashcard encontrado.</div>;
    }

    const currentCard = cards[currentIndex];

    return (
        <section className="py-20 bg-slate-950 flex flex-col items-center justify-center min-h-[800px] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center">

                <p className="text-slate-500 mb-8 text-sm font-medium tracking-wide">
                    Pressione a barra de espaço para virar o cartão e as setas "← / →" para navegar
                </p>

                <div className="relative w-full max-w-md aspect-[3/4] perspective-1000">
                    <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        {/* Front */}
                        <div className="absolute inset-0 backface-hidden">
                            <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight relative z-10">
                                    {currentCard.question}
                                </h3>

                                <div className="absolute bottom-8 text-slate-500 text-sm font-medium flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    Veja a resposta
                                </div>
                            </div>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180">
                            <div className="w-full h-full bg-slate-800 border border-slate-700 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

                                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed relative z-10 font-medium">
                                    {currentCard.answer}
                                </p>

                                <button
                                    className="absolute bottom-8 px-4 py-2 rounded-full border border-slate-600 text-slate-400 text-sm hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsFlipped(false);
                                    }}
                                >
                                    <RotateCcw className="w-3 h-3" />
                                    Voltar para pergunta
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons (Absolute to card container or outside?) 
                        Design shows them on sides. Let's put them absolute to the card container but pushed out.
                    */}
                    {/* Desktop Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="hidden md:flex absolute top-1/2 -left-24 -translate-y-1/2 w-14 h-14 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-full items-center justify-center transition-all hover:scale-110 shadow-lg border border-slate-700 z-20"
                        aria-label="Anterior"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="hidden md:flex absolute top-1/2 -right-24 -translate-y-1/2 w-14 h-14 bg-slate-800 hover:bg-slate-700 text-green-400 rounded-full items-center justify-center transition-all hover:scale-110 shadow-lg border border-slate-700 z-20"
                        aria-label="Próximo"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex md:hidden gap-4 mt-8 mb-4">
                    <button
                        onClick={handlePrev}
                        className="w-14 h-14 bg-slate-800 hover:bg-slate-700 text-blue-400 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg border border-slate-700"
                        aria-label="Anterior"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-14 h-14 bg-slate-800 hover:bg-slate-700 text-green-400 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg border border-slate-700"
                        aria-label="Próximo"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Controls / Progress */}
                <div className="mt-8 md:mt-12 flex items-center gap-8 w-full max-w-md justify-between text-slate-400 text-sm font-medium flex-wrap md:flex-nowrap">
                    <button
                        onClick={handleRestart}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Começar de novo
                    </button>

                    <div className="flex items-center gap-4 flex-1 mx-4">
                        <div className="h-1 bg-slate-800 rounded-full flex-1 overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-300"
                                style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                            />
                        </div>
                        <span className="whitespace-nowrap">{currentIndex + 1} / {cards.length} cartões</span>
                    </div>

                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Baixar
                    </button>
                </div>

            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default FlashcardSection;
