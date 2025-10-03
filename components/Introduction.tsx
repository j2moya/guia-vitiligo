
import React from 'react';

export const Introduction: React.FC = () => {
    return (
        <div className="bg-sky-50 border-l-4 border-sky-500 text-sky-800 p-6 rounded-r-lg my-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Entendiendo el Vitiligo</h2>
            <div className="space-y-3 text-slate-700">
                <p>El vitiligo es una condición que causa la pérdida de pigmento en la piel, creando manchas blancas. Aunque no es peligroso, entender sus señales es el primer paso para manejarlo.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Es prevenible y evitable:</strong> Se pueden identificar predisposiciones genéticas y rasgos clínicos para actuar a tiempo.</li>
                    <li><strong>Se puede manejar:</strong> Una vez que aparece, existen estrategias para detenerlo, repigmentar las áreas afectadas y evitar su reaparición.</li>
                    <li><strong>¿Qué es realmente?:</strong> Es una condición inflamatoria crónica y gradual. Se origina por problemas en la producción y supervivencia de las células que dan color a la piel (melanocitos).</li>
                </ul>
                <p className="font-semibold pt-2">Esta guía te ayudará a identificar diferentes características y factores asociados. No es un diagnóstico, sino una herramienta informativa.</p>
            </div>
        </div>
    );
};