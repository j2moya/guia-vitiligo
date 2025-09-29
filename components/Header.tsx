
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 md:px-8 py-6 text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-sky-700">Guía Visual de Vitiligo</h1>
                <p className="mt-2 text-md md:text-lg text-slate-600">Una herramienta educativa para entender las señales del vitiligo.</p>
            </div>
        </header>
    );
};
