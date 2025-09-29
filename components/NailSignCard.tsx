
import React from 'react';
import { NailSign } from '../types';

interface NailSignCardProps {
    sign: NailSign;
    isSelected: boolean;
    onToggle: (id: string) => void;
}

export const NailSignCard: React.FC<NailSignCardProps> = ({ sign, isSelected, onToggle }) => {
    const { id, name, description, meaning, imageUrl } = sign;

    return (
        <div className={`border rounded-lg p-4 transition-all duration-300 ${isSelected ? 'border-sky-500 bg-sky-50/50 shadow-lg' : 'border-slate-200 bg-white'}`}>
            <div className="flex flex-col md:flex-row gap-4">
                <img src={imageUrl} alt={name} className="w-full md:w-1/4 h-auto object-cover rounded-md" />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800">{name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{description}</p>
                    
                    <div className="mt-3 text-sm space-y-2">
                        <p><strong className="font-semibold text-slate-700">Posible Significado:</strong> {meaning}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:flex-col md:justify-start pt-4 md:pt-0">
                    <button
                        onClick={() => onToggle(id)}
                        className={`w-full md:w-auto px-6 py-2 rounded-full font-semibold transition-colors duration-200 text-sm ${
                            isSelected
                                ? 'bg-sky-600 text-white shadow-md'
                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                        }`}
                    >
                        {isSelected ? 'Seleccionado' : 'Lo tengo'}
                    </button>
                </div>
            </div>
        </div>
    );
};
