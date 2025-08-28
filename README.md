En esta prueba técnica se tiene un proyecto hecho con NextJS.
Se utiliza Drizzle ORM como capa de abstracción para no escribir queries SQL directamente. Actualmente el proyecto al intentar correrlo y usarlo dará errors 500 ya que falta implmentar lógica en el backend.

## Detalles
Este proyecto permite administrar **Blogs** y **Comentarios** asociados a estos. No tiene ningún estilo implementado.

## Requerimientos
Se requiere tener instalado:
- NodeJS
- PostgreSQL

En el archivo `src\backend\db\config.ts` está definido el string de conexión a la base de datos:
```ts
const pool = new Pool({
    connectionString: "postgresql://postgres:admin@localhost:5432/prueba?schema=public",
});
```
Este string se debe cambiar para correr en la base de datos local que tengas instalada. Dentro de ese archivo hay comentarios que especifican cómo se tiene que cambiar el string para tu configuración local.

Se debe tener conocimientos básicos de TypeScript. Se requeire saber como utilizar Drizzle también, por lo que se recomienda leer la [documentación](https://orm.drizzle.team/docs/get-started/postgresql-new). Drizzle es un ORM de bajo nivel a comparación a otros, por lo que es algo familiar a escribir queries SQL crudas.

## Como correr el proyecto

Primero, se debe instalar los paquetes necesarios para correr el proyecto. Ejecuta este comando en una terminal abierta en la dirección del proyecto:

```bash
npm install
```

Hay que tener una base de datos local [PostgreSQL](https://www.postgresql.org/download) a la que te puedas conectar. Si estás en windows recomiendo bastante instalar pgAdmin. El instalador de PostgreSQL en windows te debería preguntar si lo quieres instalar también. pgAdmin es una interfaz gráfica para administrar bases de datos PostgreSQL. Al instalar PostgreSQL debes tener en cuenta el nombre del usuario administrador y la contraseña que ingresas, esos datos se usarán para conectar estre proyecto a la base de datos. También tener en cuenta el nombre de la base de datos al crearla. Existen tutoriales en línea para poder realizar todo esto si no queda algo claro.

Una vez tengas una base de datos local, y hayas modificado el string de conexión en `src\backend\db\config.ts`, debes correr el siguiente comando para insertar las entidades necesarias en la base de datos según el esquema de Drizzle:

```bash
npx drizzle-kit push
```
Este comando empuja el esquema que tengas definido en el archivo `src\backend\db\schema.ts` a tu base de datos, sin generar migraciones, bueno para hacer cambios de desarrollo rápidos. No se te evaluará por las migraciones que hagas por lo que no es necesario.

Una vez hayas echo los pasos anteriores, ya puedes correr el proyecto:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para visualizar el proyecto.

## Estructura del proyecto
Este es un proyecto NextJS con app router, por lo que tener nociones básicas de como funciona NextJS es recomendable. Aquí se encuentra la [documentación](https://nextjs.org/docs/app/getting-started/project-structure).


#### Frontend
Dentro de la carpeta `src\app` se ecuentra los archivos y carpetas necesarias por NextJS para correr el frontend y definir las rutas API.

#### Backend

Dentro de la carptea `src\backend` se encuentra la lógica server-side del proyecto.

Dentro de esta capreta hay dos subcarpetas: `\db` y `\services`
`\db` contiene la configuración para usar Drizzle.
`\db\repositories` contiene archivos enfocados en operaciones de bases de datos relacionadas a los blogs y comentarios. Aquí va toda la lógica de queries básica.
`\services` contiene archivos relacionados a los blogs y comentarios, aquí se define la lógica de negocio.

#### Domain

Dentro de la carpeta `src\domain` se encuentra los archivos que definen las entidades de nuestro negocio, en este caso, los blogs y comentarios.

## Objetivos
Se te evaluará por el cumplimiento de los siguientes objetivos de desarrollo:
#### Terminar de implementar la capa de repositorio
En la carpeta `src\backend\db\repositories` se encuentran archivos con métodos definidos sin terminar, es tu tarea terminarlos. Por ejemplo:
```ts
// Get a blog by id
    public static async getBlog(id: number): Promise<Blog | null> {
        throw new Error("Method not implemented.");        
    }
```
Este método se encarga de conseguir un Blog por su ID único, debes terminar de implementar este método para no tener errores 500 al ejecutar la aplicación.

Debes terminar de implementar todos los métodos que se encuentran en los dos archivos.

#### Aplicar estilos
La aplicación en este momento no cuenta con ningún estilo. Es tu tarea aplicarle estilos a la página para que se vea presentable, tienes libertad de escribir tus propios estilos con CSS, o usar herramientas o librerías de materiales como Tailwinds, Bootstrap o MUI. Se recomienda usar [MUI](https://mui.com/material-ui/getting-started/installation).

## Extras
Los dos objectivos anteriores son las tareas mínimas, pero se recomienda realizar lo siguiente también:
- Crear componentes reusables de React, como componente Blog o componente Comentario.
- Implementar error handling por si ocurre errores inesperados en la capa de repositorio.
- Usar un archivo ``.env`` para no hardcodear parámetros importantes o que dependen de la configuracuón local, como el string de conexión a la base de datos, o el origen de las peticiones en los hooks.
- Agregar funcionalidades para poder actualizar Blogs y Comentarios. Para esto revisa como funciona los hooks en la carpeta `src\app\hooks`, los archivos contenidos ahí son lo que te permite comunicar el frontend con el backend.
- Utilizar una librería para administrar las peticiones en el frontend, como [axios](https://www.npmjs.com/package/axios) o [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview). Recomendamos TanStack Query por sus funciones automáticas para refrescar información. Los cambios que hagas basados en esto deben ser dentro de la carpeta `src\app\hooks`.
- Permitir responder comentarios. Ej: un usuario postea un primer comentario, este comentario puede ser seguido por otros de forma indefinida. Esto se debe reflejar tanto en la capa lógica como visualmente en la aplicación.
- Implementar un diseño responsive para que la aplicación web sea visible de forma agradable en cualquier tipo de pantalla.

## Entregable
Se debe entregar un archivo comprimido que contenga el proyecto. Para no enviar archivos pesados o que contengan configuraciones locales (a excepción del archivo `.env`) se debe comprimir el proyecto **SIN** las siguentes carpetas:
- `.next`
- `node_modules`

También no incluir el archivo `next-env.d-ts` en la carpeta raiz.

## Nota

El uso de las herramientas de generación de código basadas en inteligencia artifical no están prohibidas, se pueden usar como apoyo, pero no se debe solucionar todos los objetivos sólamente con esas herramientas.