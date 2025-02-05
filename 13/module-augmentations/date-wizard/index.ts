// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    //Add your module extensions here
    interface DateDetails {
            year: number;
            month: number;
            day: number;
            hours: number;    // Adicionando horas
            minutes: number;  // Adicionando minutos
            seconds: number;  // Adicionando segundos
        }

        export function pad(value: number): string;
        export function dateDetails(date: Date): DateDetails;
    export default function dateWizard(date: Date, format: string): string;

}
