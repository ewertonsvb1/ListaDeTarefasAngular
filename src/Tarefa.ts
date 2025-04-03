export interface Tarefa {
  id?: number;
  tarefa: string;
  categoria: string;
  concluido: boolean;
  dataCriacao: Date;
  dataConclusao: Date | null;
}