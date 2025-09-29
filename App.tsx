
import React, { useState, useCallback, useMemo } from 'react';
import { VITILIGO_DATA } from './constants';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { NailSignCard } from './components/NailSignCard';
import { Results } from './components/Results';
import { NailCategory } from './types';
import { ChevronUp, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
    const [selections, setSelections] = useState<Record<string, boolean>>({});
    const [showResults, setShowResults] = useState<boolean>(false);
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
        const initialState: Record<string, boolean> = {};
        VITILIGO_DATA.forEach((category, index) => {
            initialState[category.id] = index === 0; // Expand the first category by default
        });
        return initialState;
    });

    const handleToggleSelection = useCallback((id: string) => {
        setSelections(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }, []);
    
    const handleToggleCategory = useCallback((id: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }, []);

    const selectedSignsCount = useMemo(() => Object.values(selections).filter(Boolean).length, [selections]);

    return (
        <div className="min-h-screen bg-slate-100 font-sans">
            <Header />
            <main className="container mx-auto p-4 md:p-8 max-w-5xl">
                <Introduction />

                <div className="space-y-6 my-8">
                    {VITILIGO_DATA.map((category: NailCategory) => (
                        <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
                            <button
                                className="w-full p-4 md:p-6 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 focus:outline-none"
                                onClick={() => handleToggleCategory(category.id)}
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-slate-700">{category.title}</h2>
                                {expandedCategories[category.id] ? <ChevronUp className="h-6 w-6 text-slate-600" /> : <ChevronDown className="h-6 w-6 text-slate-600" />}
                            </button>
                            {expandedCategories[category.id] && (
                                <div className="p-4 md:p-6 space-y-4 border-t border-slate-200">
                                    {category.signs.map(sign => (
                                        <NailSignCard
                                            key={sign.id}
                                            sign={sign}
                                            isSelected={selections[sign.id] || false}
                                            onToggle={handleToggleSelection}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center my-10">
                    <button
                        onClick={() => setShowResults(true)}
                        className="bg-sky-600 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition-colors duration-300 text-lg shadow-lg transform hover:scale-105"
                    >
                        {selectedSignsCount > 0 ? `Ver Explicación (${selectedSignsCount} seleccionados)` : 'Ver Explicación'}
                    </button>
                </div>

                {showResults && <Results />}
                
                <footer className="text-center mt-12 text-slate-500 text-sm">
                    <p>Esta aplicación es una guía informativa y no reemplaza el consejo médico profesional.</p>
                </footer>
            </main>
        </div>
    );
};

export default App;
