export type SectionPatchOperation = {
    
    id: number, //id del item al cual vamos a modificar 
    patch: string, //ruta de la entidad
    section : 'HeroSection' | 'AboutUsSection' | 'RegistrationSection' | 'ServiceSection' | 'SiteSettings' | 'TittleSection' | 'NavbarItem', //seccion a la que pertenece el item
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test' , //operacion a realizar
    from?: string, //ruta de la entidad origen
    value: string | boolean | number //valor a modificar
}
