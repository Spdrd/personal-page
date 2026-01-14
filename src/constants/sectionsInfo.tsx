export const SECTIONS = [
  { "text": "Inicio", "target": "home" },
  { "text": "Habilidades", "target": "skills" },
  { "text": "Proyectos", "target": "projects" },
  { "text": "Contacto", "target": "contact" }
];

export type NavLink = {
  text: string;
  target: string;
}