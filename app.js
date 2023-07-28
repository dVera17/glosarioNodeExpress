/**
 * ! NodeJS Basico
 * 
 * !1.1 Introducción a  Node
 * 
 *  Node.js es un entorno de ejecución de código JavaScript que se basa en el motor
    de JavaScript V8 de Google Chrome. A diferencia de la ejecución de JavaScript en
    un navegador web, Node.js permite ejecutar código JavaScript en el lado del
    servidor. Esto significa que puedes usar JavaScript para crear aplicaciones de
    servidor y realizar tareas del lado del servidor, como manipular archivos,
    interactuar con bases de datos y responder a solicitudes de clientes.
    Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa
    que puede manejar muchas solicitudes simultáneamente sin bloquear el flujo de
    ejecución. Esto lo hace ideal para aplicaciones de alto rendimiento y en tiempo
    real, como aplicaciones web, servicios de backend, APIs y microservicios.
    Además de su capacidad para ejecutar código JavaScript en el servidor, Node.js
    también cuenta con un administrador de paquetes llamado npm (Node Package
    Manager). npm te permite descargar, instalar y administrar fácilmente paquetes y
    módulos de JavaScript de código abierto que puedes utilizar en tus aplicaciones.
    En resumen, Node.js es una plataforma que permite ejecutar código JavaScript en
    el servidor, lo cual ha impulsado el desarrollo de aplicaciones web y servicios del
    lado del servidor de alto rendimiento y escalables.

 * !1.2 Características de Node

 * ?  1.2.1   JavaScript en el Servidor
    Node.js permite ejecutar código JavaScript en el servidor, lo que facilita el uso del
    mismo lenguaje en el frontend y el backend. Esto permite a los desarrolladores
    utilizar las mismas habilidades y compartir código entre la parte del cliente y la del
    servidor.
 * ? 1.2.2 Modelo de E/S sin bloqueo y basado en eventos
    Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa que puede manejar
    múltiples solicitudes concurrentemente sin bloquear el flujo de ejecución. Esto lo
    hace muy eficiente en términos de rendimiento y escalabilidad, lo que resulta en
    aplicaciones rápidas y con capacidad de respuesta.
 * ? 1.2.3 Arquitectura Orientada a módulos
    Node.js utiliza el sistema de módulos de
    CommonJS, lo que facilita la reutilización de código y la creación de aplicaciones
    modularizadas. Esto permite a los desarrolladores separar el código en módulos yutilizar paquetes de terceros fácilmente a través del administrador de paquetes
    npm.
 * ? 1.2.4 Amplia comunidad y ecosistema 
    Node.js cuenta con una gran comunidad de
    desarrolladores y un ecosistema vibrante. Hay una amplia gama de bibliotecas,
    frameworks y herramientas disponibles en el registro de paquetes npm, lo que
    facilita el desarrollo rápido de aplicaciones y la integración con otros sistemas.

 * ? 1.2.5 Escabilidad
    Node.js es conocido por su capacidad para manejar grandes
    cantidades de solicitudes concurrentes con eficiencia. Gracias a su modelo sin
    bloqueo y su enfoque en la escalabilidad, es ampliamente utilizado para
    desarrollar aplicaciones en tiempo real, como chats en línea, juegos multijugador y
    sistemas de streaming.
 * ? 1.2.6 Orientado a Eventos
    Node.js se basa en un patrón de programación
    orientado a eventos, lo que significa que las operaciones se desencadenan en
    respuesta a eventos específicos. Esto hace que Node.js sea adecuado para el
    desarrollo de aplicaciones en tiempo real y de transmisión de datos, donde se
    requiere una actualización constante y una respuesta rápida a los eventos.
    Estas son solo algunas de las características clave de Node.js que han contribuido
    a su popularidad y adopción en el desarrollo web y de aplicaciones del lado del servidor.

 * ! 1.3 Como funciona Node
    Node.js se basa en una arquitectura de tiempo de ejecución de JavaScript basada
    en eventos y utiliza un solo subproceso (thread) principal para ejecutar el código
    JavaScript. Aquí está el proceso general de cómo funciona Node.js:

 * ? 1.3.1 Inicialización 
    Cuando se inicia una aplicación Node.js, se realiza una
    inicialización del entorno de ejecución. Se cargan los módulos necesarios, se
    establecen las variables de entorno y se configuran los parámetros de ejecución
 * ? 1.3.2 Event Loop y manejo de eventos
    Node.js utiliza un bucle de eventos (event
    loop) para manejar las solicitudes y las operaciones de E/S de manera
    asincrónica. El bucle de eventos es responsable de recibir y distribuir eventos en
    el programa. Node.js espera continuamente eventos y ejecuta las devoluciones de
    llamada asociadas a medida que ocurren.
 * ? 1.3.3 Gestión de solicitud
    Cuando llega una solicitud al servidor Node.js, se
    desencadena un evento. El servidor registra una devolución de llamada (callback)
    para manejar la solicitud y continúa con otras tareas mientras la solicitud se
    procesa en segundo plano.
 * ? 1.3.4 Operaciones de E/S no bloqueantes
    Node.js utiliza operaciones de E/S no
    bloqueantes, lo que significa que puede iniciar una operación de E/S (como leer oescribir en un archivo, hacer una solicitud a una base de datos o enviar una
    solicitud HTTP) y continuar con otras tareas sin esperar a que se complete la
    operación. Una vez que la operación de E/S se completa, se invoca la devolución
    de llamada correspondiente y se maneja la respuesta.
 * ? 1.3.5 Devoluciones de llamada (callbacks)
    Las devoluciones de llamada son
    funciones que se registran para ejecutarse después de que se complete una
    operación asincrónica. Las devoluciones de llamada se ejecutan cuando se
    produce un evento o cuando se completa una operación de E/S. Esto permite que
    Node.js maneje múltiples solicitudes y operaciones de manera eficiente y no
    bloqueante.
 * ? 1.3.6 Módulos y Npm
    Node.js utiliza un sistema de módulos basado en
    CommonJS, lo que permite la modularidad y la reutilización de código. Los
    módulos se cargan bajo demanda y se pueden utilizar para organizar el código en
    diferentes archivos y directorios. npm (Node Package Manager) es un
    administrador de paquetes utilizado en Node.js que facilita la instalación,
    actualización y administración de bibliotecas y módulos de terceros.

    En resumen, Node.js funciona mediante el uso de un bucle de eventos,
    operaciones de E/S no bloqueantes y devoluciones de llamada. Esto permite que
    Node.js maneje múltiples solicitudes y operaciones de manera eficiente, lo que lo
    hace adecuado para aplicaciones en tiempo real y de alta concurrencia.

 * ! Configuración

 * ? 1.4.1 ¿Que es Nvm?
    NVM (Node Version Manager) es una herramienta que permite administrar
    múltiples versiones de Node.js en un sistema. Con NVM, puedes instalar, cambiar
    y administrar fácilmente las versiones de Node.js en tu entorno de desarrollo.

    Algunas de las funcionalidades clave de NVM son:

    * ? Instalación de versiones específicas: 
        NVM te permite instalar versiones
        específicas de Node.js en tu sistema. Puedes elegir la versión que necesites
        según los requisitos de tu proyecto.
    * ? Cambio de Versión de Nodej.js:
        Con NVM, puedes cambiar rápidamente entre
        diferentes versiones de Node.js según tus necesidades. Esto es útil cuando tienes
        múltiples proyectos que requieren versiones específicas de Node.js.
    * ? Administración de versiones globales y locales: 
        NVM te permite gestionar
        tanto las versiones globales como las locales de Node.js. Puedes configurar una
        versión global para todo el sistema y también establecer una versión local en un
        proyecto específico.
    * ? Uso de LTS (Long Term Support)  y versiones inestables: 
        NVM te permite
        instalar tanto las versiones de LTS (soporte a largo plazo) de Node.js, que son
        más estables y se recomiendan para la mayoría de los proyectos, como las
        versiones inestables o en desarrollo.
    * ? Interfaz de línea de comandos sencilla: 
        NVM proporciona una interfaz de línea
        de comandos sencilla y fácil de usar. Puedes instalar, desinstalar y cambiar
        rápidamente las versiones de Node.js con simples comandos.
        NVM es especialmente útil cuando necesitas trabajar en proyectos que utilizan
        diferentes versiones de Node.js o cuando deseas probar tu código en diferentes
        versiones para garantizar la compatibilidad. Te brinda flexibilidad y control sobre
        las versiones de Node.js en tu sistema.
        Es importante tener en cuenta que NVM está disponible principalmente para
        sistemas operativos basados en Unix, como Linux y macOS. Sin embargo,
        también existe una alternativa llamada "nvm-windows" para entornos Windows
        que proporciona funcionalidad similar.
    
 * ? 1.4.5 Comando básicos de NVM en Linux

    * ?  nvm install <version>: 
        Este comando instala una versión específica de
        Node.js. Por ejemplo, puedes usar nvm install 14.17.0 para instalar la
        versión 14.17.0 de Node.js.
    * ? nvm use <version>:
        Este comando establece la versión especificada de
    
    * ? nvm current:    
        Este comando muestra la versión de Node.js que estás
        utilizando actualmente.
    * ? nvm ls:
        Este comando lista todas las versiones de Node.js instaladas en tu
        sistema.
    * ? nvm ls-remote:
        Este comando lista todas las versiones de Node.js
        disponibles para instalar.
    * ? nvm alias <name> <version>:
        Este comando crea un alias para una
        versión específica de Node.js. Puedes usar este alias en lugar de
        especificar la versión completa. Por ejemplo, nvm alias default 14.17.0 crea
        un alias llamado "default" para la versión 14.17.0 de Node.js.
    * ? nvm use <alias>:
        Este comando establece el alias especificado como la
        versión activa de Node.js. Por ejemplo, nvm use default establece la versión
        aliada "default" como la versión activa.
    * ?  nvm unistall <version>:
        Este comando desinstala la versión especificada de Node.js.
    * ? nvm reinstall-packages <version>:
        Este comando reinstala los paquetes npm instalados globalmente en la versión especificada de Node.js.
  * ! 1.5 Ejecutar archivos JavaScript en Node
        Para ejecutar un archivo en Node.js, sigue estos pasos:
        
        * ? Crea una carpteta : 
            EN el escritorio, crea una carpeta llamada "PrimeraVezEnNode".
        * ? Crea un Archivo : 
            Dentro de la carpeta "primeraVezEnNode", crea un
            archivo llamado "main.js". Puedes usar un editor de texto o un entorno de
            desarrollo integrado, como Visual Studio Code, para crear el archivo.
        * ? Abre la Terminal:
            En Visual Studio Code, abre la terminal desde la barra de
            menú seleccionando "Terminal" y luego "Nueva Terminal". Asegúrate de que
            la terminal esté ubicada en la carpeta "primeraVezEnNode".
        * ? Ejecuta el archivo: 
            En la terminal, escribe el siguiente comando para
            ejecutar el archivo "node main.js"
            
        Siguiendo estos pasos, podrás ejecutar el archivo "main.js" en Node.js desde la
        terminal de Visual Studio Code.
 *  ! 1.6 Diferencias de Apis Globlales JavaScript en Node
        
        * !1.6.1. global y window

        En JavaScript, la palabra clave "window" se utiliza en el entorno de un navegador
        ventana del navegador y contiene propiedades y métodos relacionados con ella,
        web para hacer referencia al objeto global que representa la ventana delnavegador. 
        El objeto "window" proporciona una interfaz para interactuar con la
        como manipulación del DOM, gestión de eventos, manipulación de cookies,
        control de ventanas emergentes, entre otros. En resumen, "window" en JavaScript
        se refiere al objeto global que representa la ventana del navegador en el entorno
        de un navegador web.
        Por otro lado, en Node.js, no existe un objeto "window" como en el entorno del
        navegador. En su lugar, Node.js utiliza el objeto "global" como su objeto global. El
        objeto "global" en Node.js proporciona un ámbito global para variables, funciones y
        objetos en una aplicación de Node.js. A través del objeto "global", se pueden
        definir variables y funciones que estarán disponibles en todos los módulos y
        archivos de la aplicación. A diferencia del objeto "window" en el navegador, el
        objeto "global" en Node.js no está relacionado con la ventana del navegador y
        ofrece un conjunto diferente de propiedades y métodos, adecuados para el
        entorno de ejecución de Node.js.
        En resumen, en el entorno del navegador, "window" se refiere al objeto global que
        representa la ventana del navegador, mientras que en Node.js, "global" se refiere
        al objeto global en el entorno de ejecución de Node.js, proporcionando un ámbito
        global para variables y funciones en la aplicación.

        * !1.6.2 process

        En Node.js, el objeto process es un objeto global que proporciona información y
        control sobre el proceso actual en ejecución. Es una instancia de la clase
        EventEmitter, lo que significa que puede emitir y escuchar eventos.

        process.exit([código]): Un método que finaliza el proceso actual. Puedes
        proporcionar un código de salida opcional como argumento para indicar el estado
        de salida del proceso.

        process.env: Un objeto que contiene las variables de entorno del sistema.
        Puedes acceder a estas variables para obtener información como la configuración
        del sistema, rutas de archivo, claves de API, etc.

        process.stdin, process.stdout y process.stderr: Estos objetos permiten la
        interacción con la entrada estándar (stdin), la salida estándar (stdout) y la salida
        de error estándar (stderr) respectivamente. Puedes leer datos de la entrada
        estándar, escribir en la salida estándar y mostrar mensajes de error en la salida de
        error estándar.

        process.on(evento, callback): Un método para registrar devoluciones de llamada
        para manejar eventos del proceso. Puedes utilizar este método para capturar
        eventos como la salida del proceso, errores no capturados, señales del sistema
        operativo, etc.

    * !1.7 Sistema de módulos
        El sistema de módulos de Node.js es un componente fundamental de la
        plataforma que permite la modularidad y reutilización de código en aplicaciones yproyectos desarrollados con Node.js. 
        Proporciona una forma organizada y
        estructurada de organizar y distribuir el código en diferentes archivos y directorios.
        El sistema de módulos de Node.js se basa en el concepto de módulos, que son
        unidades de código independientes que encapsulan funcionalidades específicas.
        Cada módulo tiene su propio ámbito y puede exportar funciones, objetos o
        variables para ser utilizados por otros módulos.
        *!1.7.1 Common JS

        CommonJS es una especificación de módulos para JavaScript que define un
        formato estándar para la organización y carga de módulos en entornos de
        ejecución, como Node.js. Fue diseñado con el objetivo de proporcionar una
        solución para modularizar el código JavaScript y facilitar la reutilización de
        módulos en diferentes proyectos.

        Las características principales de CommonJS son:

        *? Síncrono:

        El sistema de módulos CommonJS utiliza una carga de módulos
        síncrona, lo que significa que los módulos se cargan y evalúan de forma
        secuencial antes de que el programa principal pueda continuar su ejecución. Esto
        permite que los módulos dependientes estén disponibles de inmediato.

        *?Carga bajo demanda: 
        Los módulos se cargan solo cuando son requeridos
        mediante la función require(). Esto permite una carga eficiente de los módulos
        necesarios y evita la carga innecesaria de módulos que no se utilizan.3

        *?Exportación   de importación de módulos:
        CommonJS proporciona una forma
        estándar de exportar e importar funcionalidades entre módulos. Los módulos
        pueden utilizar el objeto module.exports para exportar variables, objetos o
        funciones, y la función require() para importar los módulos necesarios.
        *?Resolución de Rutas:
        CommonJS proporciona una resolución de rutas relativas
        en la carga de módulos. Se utiliza el prefijo ./ para referenciar módulos locales y el
        prefijo ../ para subir un nivel en la jerarquía de directorios.
        *?Ámbito propio:
        Cada módulo CommonJS tiene su propio ámbito (scope), lo que
        significa que las variables y las funciones definidas en un módulo no están
        disponibles de forma predeterminada en otros módulos. Esto ayuda a evitar
        conflictos de nombres y proporciona una encapsulación adecuada.
        *?Módulos incorporados:
        CommonJS incluye un conjunto de módulos
        incorporados (Core Modules) que están disponibles de forma predeterminada sin
        necesidad de instalar ninguna dependencia adicional. Estos módulos incluyenfuncionalidades comunes como fs para operaciones de sistema de archivos, http
        para la creación de servidores web y path para manejar rutas de archivos y
        directorios.
        
        Es importante tener en cuenta que CommonJS es ampliamente utilizado en
        entornos de servidor como Node.js, pero no es compatible de forma nativa en los
        navegadores web. En los navegadores, se utiliza el formato de módulos ES6
        (ECMAScript 2015) o se requiere el uso de herramientas de construcción (como
        Webpack o Browserify) para convertir los módulos CommonJS en un formato
        compatible con el navegador. Si deseas obtener más información sobre las
        commonJS visita: https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
        
        *!1.7.1.1 require JSON
        CommonJS es posible importar archivos JSON directamente como módulos.
        Cuando se importa un archivo JSON, CommonJS lo interpreta automáticamente y
        lo devuelve como un objeto JavaScript.

        En este ejemplo, el archivo datos.json contiene un objeto JSON con diferentes
        propiedades. Luego, en main.js, se utiliza require() para importar el archivo JSON
        como un módulo y asignarlo a la variable datos. A partir de ahí, se puede acceder
        a las propiedades del objeto JSON normalmente.
        Es importante tener en cuenta que, a diferencia de los módulos JavaScript, los
        archivos JSON no tienen una funcionalidad dinámica o código ejecutable. Se
        cargan simplemente como objetos JavaScript estáticos
        *!1.7.1.1 require fs
        El módulo fs (File System) en Node.js proporciona una amplia gama de métodos
        para interactuar con el sistema de archivos del sistema operativo. A continuación,
        se mencionan algunos de los métodos más utilizados del módulo fs:
        1. fs.readFile(path, options, callback): Lee el contenido de un archivo de
        forma asincrónica.

         path: Ruta del archivo a leer.
         options: Opciones de lectura, como la codificación.
         callback: Función de devolución de llamada que recibe err (error) y data
        (contenido del archivo).
        2. fs.readFileSync(path, options): Lee el contenido de un archivo de forma
        sincrónica (bloqueante).
         path: Ruta del archivo a leer.
         options: Opciones de lectura, como la codificación. Devuelve el contenido
        del archivo.
        3. fs.writeFile(file, data, options, callback):Escribe datos en un archivo de
        forma asincrónica.
         file: Ruta del archivo en el que se escribirán los datos.
         data: Datos a escribir en el archivo.
         options: Opciones de escritura, como la codificación.
         callback: Función de devolución de llamada que recibe err (error) cuando
        se completa la escritura.
        4. fs.writeFileSync(file, data, options):Escribe datos en un archivo de forma
        sincrónica (bloqueante).
         file: Ruta del archivo en el que se escribirán los datos.
         data: Datos a escribir en el archivo.
         options: Opciones de escritura, como la codificación.5. fs.appendFile(file, data, options, callback): Agrega datos al final de un
        archivo de forma asincrónica.
         file: Ruta del archivo al que se agregarán los datos.
         data: Datos a agregar al archivo.
         options: Opciones de escritura, como la codificación.
         callback: Función de devolución de llamada que recibe err (error) cuando
        se completa la operación.
        6. fs.appendFileSync(file, data, options): Agrega datos al final de un archivo
        de forma sincrónica (bloqueante)
         file: Ruta del archivo al que se agregarán los datos.
         data: Datos a agregar al archivo.
         options: Opciones de escritura, como la codificación.
        7. fs.readdir(path, callback):Lee el contenido de un directorio de forma
        asincrónica.
         path: Ruta del directorio a leer.
         callback: Función de devolución de llamada que recibe err (error) y files
        (array de nombres de archivos en el directorio).
        8. fs.readdirSync(path):Lee el contenido de un directorio de forma sincrónica
        (bloqueante).
         path: Ruta del directorio a leer. Devuelve un array de nombres de archivos
        en el directorio.
        9. fs.mkdir(path, options, callback): Crea un directorio de forma asincrónica.
         path: Ruta del directorio a crear.
         options: Opciones para la creación del directorio.
         callback: Función de devolución de llamada que recibe err (error) cuando
        se completa la creación.
        10. fs.mkdirSync(path, options): Crea un directorio de forma sincrónica
        (bloqueante).
         path: Ruta del directorio a crear.
         options: Opciones para la creación del directorio.
        11. fs.rmdir(path, callback): Elimina un directorio de forma asincrónica.
         path: Ruta del directorio a eliminar.
         callback: Función de devolución de llamada que recibe err (error) cuando
        se completa la eliminación.
        12. fs.rmdirSync(path):Elimina un directorio de forma sincrónica (bloqueante).

        *!1.7.1.3 Require http

        El módulo https en Node.js proporciona una API para realizar solicitudes HTTP
        seguras (HTTPS). A continuación, se mencionan algunos de los métodos más
        utilizados del módulo https:

        1. http.get(options, callback):Realiza una solicitud HTTP GET a través de
        HTTPS.
         options: Opciones de la solicitud, como la URL y los encabezados.
         callback: Función de devolución de llamada que se ejecuta cuando se
        completa la respuesta. Recibe el objeto de respuesta.
        2. http.request(options, callback):Inicia una solicitud HTTP personalizada a
        través de HTTPS.
         options: Opciones de la solicitud, como la URL, los encabezados y el
        método HTTP.
         callback: Función de devolución de llamada que se ejecuta cuando se
        completa la respuesta. Recibe el objeto de respuesta.
        3. http.createServer(options, requestListener):Crea un servidor HTTPS.
         options: Opciones para la creación del servidor, como el certificado y la
        clave privada.
         requestListener: Función que se ejecuta cuando se recibe una solicitud en
        el servidor.
        Estos son algunos de los métodos más utilizados del módulo https. Sin embargo,
        hay otros métodos disponibles para operaciones más avanzadas, como el manejo
        de certificados SSL/TLS y la configuración de agentes HTTP personalizados.
        Recuerda que los métodos de https siguen la misma estructura y conceptos
        básicos que los del módulo http, pero se utilizan para realizar solicitudes y crear
        servidores seguros utilizando el protocolo HTTPS.
        Puedes consultar la documentación oficial de Node.js para obtener más detalles
        sobre cada método y su uso específico en el módulo https.

        *!1.7.2 Que es NPM 
        NPM (Node Package Manager) es el administrador de paquetes predeterminado
        para Node.js, que es un entorno de tiempo de ejecución de JavaScript basado en
        el motor V8 de Google Chrome. NPM permite a los desarrolladores de Node.js
        compartir y reutilizar fácilmente el código JavaScript, así como gestionar las
        dependencias de un proyecto.

        Con NPM, puedes:

        *?Instalar paquetes:
        Puedes buscar, descargar e instalar paquetes de código
        JavaScript disponibles públicamente en el registro de paquetes de NPM. Estos
        paquetes pueden ser librerías, frameworks o cualquier otro tipo de código que
        desees utilizar en tu proyecto de Node.js.

        *?Gestionar dependencias
        NPM te permite definir las dependencias de tu
        proyecto en un archivo llamado "package.json". Este archivo contiene información
        sobre las dependencias requeridas por tu proyecto, como el nombre del paquete,
        la versión y las restricciones de versión. NPM puede resolver automáticamente las
        dependencias y descargarlas en tu proyecto.

        *?Actualizar paquetes:
        Puedes utilizar NPM para actualizar fácilmente los paquetes
        instalados en tu proyecto a versiones más recientes, lo que te permite beneficiarte
        de las correcciones de errores y las nuevas funcionalidades.

        *?Publicar tus propios paquetes:
        Puedes utilizar NPM para actualizar fácilmente los paquetes
        instalados en tu proyecto a versiones más recientes, lo que te permite beneficiarte
        de las correcciones de errores y las nuevas funcionalidades.

        NPM se instala automáticamente junto con Node.js, por lo que no es necesario
        realizar ninguna instalación adicional. Una vez que tienes Node.js instalado,
        puedes utilizar el comando "npm" en la línea de comandos para ejecutar todas las
        operaciones relacionadas con NPM

        Para este ejemplo, vamos a instalar el archivo package.json para poder utilizar los
        módulos de ES, Comando
        *? “npm init -y”

        *!1.7.2.1. ES Modules
        ES Modules, también conocidos como ECMAScript Modules o ES6 Modules, son
        una forma estándar de organizar y compartir código en JavaScript, introducida en
        el estándar ECMAScript 2015 (ES6). A diferencia de CommonJS, que es más
        común en entornos de servidor como Node.js, los módulos ES son una
        especificación oficial del lenguaje JavaScript y están diseñados para funcionar
        tanto en navegadores web como en entornos de servidor

        *?Las características principales de los módulos ES son:

        *?Asíncrono y basado en promesas: 
        A diferencia del sistema de módulos
        CommonJS, los módulos ES se cargan de forma asíncrona, lo que significa que se
        pueden cargar y evaluar de manera no bloqueante. Esto permite que el programa
        principal continúe su ejecución mientras los módulos se cargan en segundo plano. 
        La carga de módulos ES se basa en promesas, lo que facilita el manejo de
        dependencias y la carga condicional de módulos.

        *?Sintaxis import/export:
        Los módulos ES utilizan una sintaxis específica para
        importar y exportar funcionalidades entre módulos. Para exportar, se utiliza la
        palabra clave export seguida de la declaración, variable o función que se desea
        exportar. Para importar, se utiliza la palabra clave import seguida del nombre y
        ubicación del módulo, y se puede especificar qué funcionalidades se desean
        importar utilizando la sintaxis de desestructuración.

        *!1.8.Que es Nodemon
        Nodemon es una herramienta de desarrollo para aplicaciones Node.js que facilita
        la tarea de reiniciar automáticamente la aplicación cuando se detectan cambios en
        los archivos del proyecto. En lugar de tener que reiniciar manualmente la
        aplicación cada vez que se realizan cambios en el código, Nodemon lo hace de
        forma automática, lo que agiliza el proceso de desarrollo y mejora la productividad.

        Cuando se ejecuta una aplicación con Nodemon, este monitorea los archivos del
        proyecto en busca de cambios. Si se detecta algún cambio en un archivo,
        Nodemon reinicia automáticamente la aplicación, lo que significa que los cambios
        realizados en el código se reflejan de inmediato sin tener que detener y reiniciar
        manualmente la ejecución de la aplicación.

        Nodemon también proporciona opciones adicionales, como la capacidad de
        especificar qué archivos se deben monitorear y reiniciar, ignorar ciertos archivos o
        directorios, y ejecutar scripts personalizados antes o después de cada reinicio de
        la aplicación.

        *?1.8.1. características

        *?Reinicio automático
        Nodemon monitorea los archivos del proyecto en busca de
        cambios y reinicia automáticamente la aplicación cuando se detecta un cambio.
        Esto evita tener que reiniciar manualmente la aplicación cada vez que se realicen
        modificaciones en el código

        *?Soporte amplio
        Nodemon es compatible con una amplia variedad de proyectos y
        frameworks basados en Node.js. Puede utilizarse en proyectos simples, así como
        en aplicaciones más complejas y basadas en frameworks como Express, Koa,
        Hapi, entre otros.

        *?Detalles de reinicio controlados
        Nodemon permite controlar los detalles del
        reinicio automático de la aplicación. Puedes especificar qué archivos o directorios
        deben ser monitoreados y reiniciados, y también puedes excluir archivos o
        directorios específicos del monitoreo.

        *?Integración con scripts personalizados
        Nodemon proporciona la capacidad de
        ejecutar scripts personalizados antes o después de cada reinicio de la aplicación.
        Esto permite realizar tareas adicionales, como limpiar la caché, ejecutar pruebas
        automatizadas o ejecutar comandos de compilación, para que se realicen
        automáticamente en cada reinicio.

        *?Modo silencioso
        Nodemon tiene un modo silencioso que reduce la cantidad de
        información de registro que se muestra en la consola. Esto puede ser útil para
        mantener un flujo de trabajo limpio y sin distracciones durante el desarrollo.

        *?Configuración flexible
        Nodemon proporciona opciones de configuración flexibles
        que permiten ajustar su comportamiento según las necesidades del proyecto.
        Puedes especificar opciones como la extensión de archivos a monitorear, el
        tiempo de espera antes de reiniciar, la exclusión de archivos o directorios, y más.

        *?Amplia comunidad y soporte activo
        Nodemon tiene una comunidad activa de
        desarrolladores y una amplia base de usuarios. Esto significa que hay una gran
        cantidad de recursos y soporte disponibles en línea, lo que facilita obtener ayuda y
        encontrar soluciones a problemas comunes.

        *!1.8.3. REQUEST HTTP en Node
        En Node.js, el objeto request (solicitud) es un objeto proporcionado por el módulo
        http o https que representa la solicitud HTTP recibida por el servidor. Proporciona
        información sobre la solicitud realizada por el cliente, como la URL, los
        encabezados, los parámetros de consulta y el cuerpo de la solicitud.

        El objeto request se pasa como argumento a la función de controlador de solicitud
        cuando se maneja una solicitud HTTP en el servidor. A través de este objeto,
        puedes acceder a los detalles de la solicitud y tomar decisiones basadas en ellos.

        Algunas propiedades y métodos comunes disponibles en el objeto request son:

        *?request.url
        La URL de la solicitud.
        *?request.method
        El método HTTP utilizado en la solicitud (GET, POST, etc.).
        *?request.headers
        Un objeto que contiene los encabezados de la solicitud
        *?request.params
        Los parámetros de ruta si estás utilizando un enrutador.
        *?request.query
        Los parámetros de consulta si están presentes en la URL.
        *?request.body
        El cuerpo de la solicitud (datos enviados en una solicitud POST o PUT).
        
 */