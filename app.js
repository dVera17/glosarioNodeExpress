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

        Puedes utilizar estas propiedades y métodos para acceder a la información de la
        solicitud y realizar acciones correspondientes en tu servidor Node.js. Por ejemplo,
        puedes verificar la ruta solicitada, los encabezados de autenticación, los datos
        enviados en el cuerpo de la solicitud, etc.

        *!1.8.4. Obtener los datos

        Cuando se recibe una solicitud HTTP en un servidor Node.js, los datos de la
        solicitud se envían en forma de fragmentos (chunks) en lugar de enviarse en su
        totalidad.

        1. En primer lugar, se importan dos módulos: createServer del módulo http y
        fs para el manejo de archivos en el sistema de archivos.

        2. Luego, se utiliza la función createServer para crear un servidor HTTP. Esta
        función toma como argumento una función de devolución de llamada que
        se ejecutará cada vez que se reciba una solicitud HTTP. La función de
        devolución de llamada tiene dos parámetros: req para la solicitud y res para
        la respuesta.

        3. Dentro de la función de devolución de llamada, se declara una variable
        llamada data e inicialmente se le asigna una cadena vacía. Esta variable se
        utilizará para almacenar los datos recibidos en la solicitud.

        4. A continuación, se utiliza el método req.on() para escuchar el evento
        "data" de la solicitud. Cada vez que se recibe un fragmento de datos, la
        función de devolución de llamada se ejecuta y el fragmento se concatena a
        la variable data.

        5. Después, se utiliza el método req.on() para escuchar el evento "end" de la
        solicitud. Este evento se activa cuando se han recibido todos los datos de la
        solicitud. Dentro de la función de devolución de llamada, se muestra en la
        consola el contenido de data, se escribe data en la respuesta, se guarda
        data en un archivo llamado "data.txt" utilizando fs.writeFile(), y finalmente
        se envía la respuesta.

        6.  A continuación, se define un objeto config que especifica la dirección IP del
        servidor (hostname) y el puerto en el que se escucharán las solicitudes
        (port).

        7. Finalmente, se llama al método listen() en el servidor HTTP creado,
        pasando el objeto config y una función de devolución de llamada. La
        función de devolución de llamada simplemente muestra en la consola la
        URL del servidor.

            
        *!2. Node JS Intermedio

        *!2.1 Que es express

        Express es un popular framework de aplicaciones web para Node.js. Proporciona
        una capa adicional de abstracción sobre el módulo http incorporado de Node.js, lo
        que facilita la creación de aplicaciones web y APIs de manera más eficiente y con
        menos código.

        Express ofrece una serie de características y utilidades que simplifican el
        enrutamiento de URL, el manejo de solicitudes y respuestas, el renderizado de
        vistas, el manejo de errores, la gestión de sesiones y cookies, entre otros aspectos
        comunes en el desarrollo web. https://expressjs.com/es/4x/api.html#express

        *!2.1.1. Características

        Enrutamiento: Express proporciona un enrutador flexible que permite definir rutas
        y manejar las solicitudes HTTP correspondientes. Esto permite establecer la lógica
        de controladores para diferentes rutas y métodos HTTP.

        Middleware: Express utiliza un modelo de middleware, donde se pueden agregar
        funciones intermediarias (middleware) a la cadena de procesamiento de
        solicitudes. Esto permite realizar acciones como autenticación, compresión,
        registro y manipulación de solicitudes y respuestas antes de que lleguen a su
        controlador final.

        Gestión de vistas: Express facilita el renderizado de vistas HTML utilizando
        cualquier motor de plantillas (como EJS, Pug o Handlebars) para generar
        contenido dinámico y enviarlo al cliente.

        Integración con servicios y recursos externos: Express proporciona una forma
        sencilla de interactuar con servicios y recursos externos, como bases de datos,
        servicios de almacenamiento en la nube y APIs de terceros, a través de bibliotecas
        y módulos adicionales

        Amplia comunidad y ecosistema: Express es uno de los frameworks más
        populares y ampliamente adoptados en la comunidad de Node.js. Como resultado,
        cuenta con una gran cantidad de recursos, módulos y complementos
        desarrollados por la comunidad que extienden aún más su funcionalidad.
        
        *!2.1.3. Obtener parámetros y encabezados

        - params : En Express, los params se refieren a los parámetros enviados a
        través del enrutador en una solicitud HTTP. Los parámetros son partes
        variables de la URL que permiten capturar valores específicos y utilizarlos
        en la lógica de la aplicación.

        En Express, los parámetros se definen en la ruta utilizando dos puntos (:)
        seguidos de un nombre de variable. Por ejemplo, en la ruta
        /campus/:idCamper, idCamper es un parámetro que puede tomar
        diferentes valores en cada solicitud.

        Cuando se recibe una solicitud que coincide con una ruta que contiene
        parámetros, Express extrae los valores de los parámetros y los hace
        accesibles a través del objeto req.params. req.params es un objeto que
        contiene pares clave-valor, donde la clave es el nombre del parámetro
        definido en la ruta y el valor es el valor real que se captura de la URL.

        - headers: En Express, los "headers" (encabezados) se refieren a la
        información adicional que se envía junto con una solicitud HTTP o una
        respuesta HTTP. Los encabezados proporcionan metadatos sobre la
        solicitud o respuesta, como el tipo de contenido, la codificación, las cookies,
        la autenticación y otros detalles importantes.

        En Express, los encabezados se pueden acceder y manipular utilizando el
        objeto req.headers para las solicitudes entrantes y el objeto res.set() o
        res.setHeader() para las respuestas salientes.

        Cuando se recibe una solicitud HTTP en Express, los encabezados
        enviados por el cliente se almacenan en el objeto req.headers. Puedes
        acceder a ellos para obtener información específica o tomar decisiones en
        función de los valores de los encabezados.

        Por ejemplo, para acceder al encabezado Content-Type de una solicitud
        entrante, puedes utilizar req.headers['content-type'].
        Para establecer encabezados en una respuesta saliente, puedes utilizar el
        método res.set() o res.setHeader(). Estos métodos permiten establecer
        encabezados personalizados o modificar los encabezados existentes antes
        de enviar la respuesta al cliente.

        *!2.1.4. Middleware

        En Node.js, los middlewares son funciones o conjuntos de funciones que se
        utilizan para procesar las solicitudes HTTP o las respuestas antes de que lleguen
        a su destino final. Actúan como intermediarios entre el cliente y el servidor, y se
        ejecutan secuencialmente en el orden en que se definen.

        Los middlewares pueden realizar diversas tareas, como modificar los objetos de
        solicitud y respuesta, realizar validaciones, autenticar usuarios, administrar
        sesiones, registrar información de registro, comprimir o cifrar datos, entre otros.

        *!2.1.5. Router

        En Express, un router es una forma de organizar y gestionar las rutas de una
        aplicación web de manera modular. Los routers permiten agrupar rutas
        relacionadas y sus respectivos controladores en un lugar específico.

        Un router en Express es un objeto que proporciona métodos para definir rutas y
        gestionar las solicitudes HTTP asociadas a esas rutas. Puedes utilizar varios
        routers en una aplicación Express para dividir y organizar las rutas en diferentes
        módulos o archivos.

        Al utilizar routers, puedes mejorar la estructura y la legibilidad de tu código, así
        como facilitar el mantenimiento y la escalabilidad de tu aplicación. Los routers te
        permiten definir rutas relacionadas en un archivo separado y luego montar ese
        router en una ruta específica en tu aplicación principal.

        *?1. Importación del paquete express:
        Se importa el paquete express para utilizar sus funcionalidades, incluido el
        enrutador.

        *?2. Declaración del enrutador:
        Se crea un enrutador utilizando express.Router(), y se guarda en la
        variable appCamper. Este enrutador será responsable de gestionar las
        rutas relacionadas a "campers".

        *?3. Middleware:
        Se define un middleware utilizando appCamper.use(). Este middleware
        actúa como un intermediario y se ejecutará antes de que se maneje
        cualquier ruta. En este caso, el middleware simplemente imprime el objeto
        req (la solicitud) en la consola y luego llama a next() para permitir que el
        enrutador continúe manejando la solicitud.

        *?4. Definición de las rutas:
        Se definen tres rutas en el enrutador:
        - GET /: Responde con el texto "GET ".
        - GET /:id: Responde con el texto "GET " seguido del valor del
        -arámetro id de la solicitud.
        - POST /: Responde con el texto "POST".

        *?5. Exportación del enrutador:
        El enrutador appCamper se exporta utilizando export default. Esto permite
        utilizar este enrutador en otros archivos de la aplicación que lo importen

        *!2.2. Que son las variables de entorno ‘dotenv’

        Las variables de entorno en Node.js son variables específicas del entorno en el
        que se ejecuta una aplicación. Son valores que se pueden configurar
        externamente al código y se utilizan para almacenar información sensible,
        configuraciones personalizadas u otros datos relevantes para la aplicación.

        En Node.js, las variables de entorno se pueden acceder utilizando el objeto
        process.env. Este objeto proporciona acceso a todas las variables de entorno
        definidas en el sistema operativo donde se está ejecutando la aplicación.
        https://github.com/motdotla/dotenv

        *!2.2.1. Caracteristicas

        Configuración de la aplicación: Puedes utilizar variables de entorno para
        almacenar valores de configuración, como credenciales de bases de datos, claves
        de API, URL de servicios externos, etc. Esto permite mantener esta información
        sensible separada del código fuente y facilita la configuración de la aplicación en
        diferentes entornos (desarrollo, producción, pruebas, etc.).

        Parámetros personalizables: Puedes utilizar variables de entorno para permitir la
        personalización de ciertos comportamientos de la aplicación. Por ejemplo, podrías
        tener una variable de entorno que determine el número de elementos a mostrar
        por página en una paginación, o el idioma predeterminado a utilizar.

        Depuración y registro: Las variables de entorno también pueden ser útiles para
        habilitar o deshabilitar la depuración o el registro de la aplicación en función de la
        configuración del entorno. Esto permite tener un mayor control sobre los mensajes
        de registro o habilitar características adicionales de depuración en entornos de
        desarrollo o pruebas.

        *!2.2.2. instalación de dotenv para ‘Windows y Linux’

        1. Asegúrate de estar ubicado en la raíz de tu proyecto de Node.js en la línea
        de comandos.
        2. Ejecuta el siguiente comando para instalar dotenv: ‘npm i -E -D dotenv’

        *!2.2.3. configuración de dotenv con express

        Esta línea de código carga las variable de entorno definidas en el archivo
        .env en process.env, lo que permite acceder a ellas posteriormente.

        Se obtiene la configuración del servidor desde la variable de entorno
        MY_CONFIG, que se supone contiene una cadena JSON. La cadena se
        analiza y se convierte en un objeto JavaScript utilizando JSON.parse(), y
        se guarda en la variable config.

        Se define una ruta GET para la ruta /campus. Cuando se accede a esta
        ruta, se envía la respuesta "Campers :)".

        *!2.3. Conexión a MySQL usando ‘mysql2’

        mysql2 es un paquete de Node.js que proporciona una interfaz para interactuar
        con bases de datos MySQL. Es una biblioteca de cliente MySQL para Node.js que
        se basa en el paquete mysql original pero con varias mejoras y optimizaciones.

        mysql2 ofrece un rendimiento superior en comparación con mysql, especialmente
        en escenarios con altas cargas de trabajo y consultas concurrentes. Utiliza la
        biblioteca C++ libmysqlclient para comunicarse directamente con el servidor
        MySQL, lo que permite una mayor eficiencia y velocidad.
        https://github.com/sidorares/node-mysql2

        *!2.3.1. Características

        Rendimiento mejorado: mysql2 ha sido diseñado para proporcionar un
        rendimiento superior y un menor uso de recursos en comparación con mysql. Esto
        se logra mediante el uso de conexiones de socket TCP/IP más eficientes y un
        mejor manejo de la memoria.

        Soporte para consultas preparadas: mysql2 permite utilizar consultas
        preparadas, lo que puede mejorar la seguridad y el rendimiento al ejecutar
        consultas repetidas con diferentes parámetros.

        Manejo de resultados de consultas mejorado: mysql2 proporciona un manejo
        mejorado de los resultados de las consultas, lo que permite un procesamiento más
        eficiente de grandes conjuntos de resultados.

        Compatibilidad con las últimas características de MySQL: mysql2 se mantiene
        actualizado con las últimas características y mejoras introducidas en MySQL.
        Streams: mysql2 admite el uso de streams para la recuperación de resultados de
        consultas grandes. Esto significa que puedes leer y procesar los resultados en
        tiempo real a medida que se recuperan del servidor de MySQL, en lugar de
        esperar a que se complete toda la consulta.

        Compatibilidad con promesas: A diferencia de mysql, mysql2 proporciona una
        API basada en promesas, lo que facilita el manejo de consultas asincrónicas y
        mejora la legibilidad del código.

        Pooling de conexiones mejorado: mysql2 ofrece un sistema de pooling de
        conexiones más avanzado que mysql. El pooling de conexiones es útil para
        administrar un grupo de conexiones a la base de datos y reutilizarlas de manera
        eficiente para consultas sucesivas.

        Soporte para autenticación segura: mysql2 admite la autenticación segura con
        el servidor de MySQL utilizando los métodos de autenticación más recientes, como
        la autenticación de enchufe de autenticación (caching_sha2_password).
        Compatibilidad con múltiples consultas: mysql2 permite ejecutar varias
        consultas en una sola llamada, lo que puede mejorar la eficiencia al reducir la
        latencia de la red.

        Enlace nativo opcional: mysql2 ofrece la opción de utilizar un enlace nativo
        opcional para mejorar aún más el rendimiento. Este enlace nativo utiliza la
        biblioteca C mysqlclient en lugar de libmysqlclient, lo que puede brindar una
        mejora de rendimiento adicional.

        *!2.3.2. Instalación de mysql2 para ‘Windows y Linux’

        1. Abre una terminal o línea de comandos y navega hasta la ubicación de tu
        proyecto.
        2. Ejecuta el siguiente comando para instalar ‘npm i -E -D mysql2’

        *!2.3.3. SELECT

        SELECT * FROM ciudad;

        *!2.3.4. INSERT INTO

        INSERT INTO ciudad(nombre) VALUES("bucaramanga");

        *!2.3.5. UPDATE

        UPDATE ciudad SET nombre = "medellin" WHERE id_ciudad = 1;

        *!2.3.6. DELETE

        DELETE FROM ciudad WHERE id = 1;

        *!3. Node JS Avanzado

        *!3.1 Que es nanoid

        NanoID es una biblioteca de generación de identificadores únicos y aleatorios en
        Node.js. Proporciona una forma sencilla de generar identificadores únicos que
        pueden ser utilizados, por ejemplo, como claves primarias en bases de datos,
        identificadores de objetos, tokens de autenticación, entre otros casos de uso.

        La biblioteca NanoID está diseñada para ser rápida, compacta y segura,
        generando identificadores únicos de forma eficiente. Utiliza una combinación de
        caracteres alfanuméricos y se puede configurar para generar identificadores con
        diferentes longitudes y utilizando diferentes alfabetos. https://github.com/ai/nanoid

        *?3.1.1 Características

        Generación de identificadores únicos: NanoID está diseñado específicamente
        para generar identificadores únicos de manera eficiente. Utiliza algoritmos
        criptográficamente seguros para garantizar que los identificadores generados sean
        altamente improbables de repetirse.

        Tamaño configurable: Puedes especificar la longitud deseada del identificador
        generado mediante el parámetro de longitud de la función nanoid(). Esto te
        permite ajustar el tamaño del identificador según tus necesidades específicas.

        Alfabeto personalizable: NanoID utiliza un conjunto de caracteres alfanuméricos
        por defecto (a-z, A-Z y 0-9). Sin embargo, también puedes personalizar el alfabeto
        utilizado para generar los identificadores. Esto te permite, por ejemplo, utilizar solo
        caracteres en minúscula o añadir caracteres adicionales según tus preferencias.

        Rendimiento eficiente: NanoID está diseñado para ser rápido y eficiente en
        términos de rendimiento. Los algoritmos utilizados se optimizan para generar
        identificadores únicos de manera rápida, lo que es especialmente importante
        cuando se necesitan generar grandes cantidades de identificadores en poco
        tiempo.

        Tamaño compacto: La biblioteca NanoID es relativamente pequeña y liviana, lo
        que significa que no añade una carga significativa a tus aplicaciones Node.js. Esto
        es especialmente beneficioso si estás trabajando en entornos con restricciones de
        recursos

        *!3.1.2. Instalación de nanoid para ‘Windows y Linux’

        1. Abre una terminal o línea de comandos en el directorio raíz de tu proyecto.
        2. Ejecuta el siguiente comando para instalar nanoID a través de npm (Node
        Package Manager): npm i -E -D nanoid

        *!3.2 Que son las cookies

        las cookies son pequeños fragmentos de información que se almacenan en el lado
        del cliente (generalmente en el navegador) y se utilizan para realizar un
        seguimiento de la información relacionada con la sesión del usuario o para
        almacenar preferencias específicas.

        Cuando un cliente realiza una solicitud a un servidor Node.js, puede enviar una
        cookie junto con la solicitud. El servidor puede leer esa cookie y utilizar la
        información almacenada en ella para realizar acciones específicas o personalizar
        la respuesta.

        *!3.2.1. Que es cookie-parse

        es un middleware popular en Node.js que se utiliza para analizar y manejar
        cookies en las solicitudes HTTP. Proporciona una forma conveniente de leer y
        manipular las cookies enviadas por el cliente. https://github.com/expressjs/cookieparser

        *?3.2.2. Caracteristicas

        Análisis de cookies: cookie-parser analiza automáticamente las cookies
        presentes en las solicitudes entrantes y las convierte en un objeto JavaScript
        accesible en las rutas de tu aplicación.

        Acceso sencillo: Una vez que cookie-parser ha analizado las cookies,
        proporciona acceso sencillo a ellas a través de la propiedad req.cookies del objeto
        request (req) en Express. Puedes leer los valores de las cookies y utilizarlos en tus
        manejadores de rutas.

        Soporte para firmado de cookies: cookie-parser también admite la firma de
        cookies utilizando una clave secreta. Puedes especificar una clave al configurar
        cookie-parser para que las cookies se firmen automáticamente y se verifiquen
        cuando sean recibidas.

        Configuración de opciones: Puedes personalizar el comportamiento de cookieparser configurando diversas opciones. Algunas opciones comunes incluyen la
        configuración de las opciones de firma, la duración de las cookies, la ruta de
        acceso, el dominio, etc.

        Establecimiento de cookies: Además de analizar las cookies entrantes, cookieparser te permite establecer fácilmente nuevas cookies en las respuestas salientes
        utilizando el método res.cookie() en Express. Esto simplifica el proceso de
        establecer y enviar cookies al cliente.

        Middleware de alto rendimiento: cookie-parser está diseñado para ser un
        middleware de alto rendimiento que procesa eficientemente las cookies en las
        solicitudes entrantes. Puede manejar múltiples cookies y realizar las tareas de
        análisis y manipulación de cookies de manera eficaz.

        *!3.2.3. Instalación de cookie-parser para ‘Windows y Linux’

        1. Inicia un nuevo proyecto Node.js o ve al directorio de tu proyecto existente
        desde la línea de comandos.
        2. Ejecuta el siguiente comando para instalar cookie-parser utilizando el gestor
        de paquetes npm npm i -E -D cookie-parser

        *!3.3 Que es DTO

        DTO significa Data Transfer Object (Objeto de Transferencia de Datos). Es un
        patrón de diseño que se utiliza en la programación de software, especialmente en
        arquitecturas de varias capas, donde se necesita transferir datos entre capas o
        componentes del software.

        Un DTO es esencialmente un objeto simple, a menudo sin lógica de negocio, que
        contiene solo campos y métodos de acceso (getters y setters). Su objetivo
        principal es encapsular los datos y permitir su transporte de un sistema a otro de
        manera eficiente. Se utilizan para serializar los datos que deben enviarse a través
        de la red, lo que puede ser costoso en términos de recursos de tiempo y CPU.
        https://github.com/typestack/class-transformer

        *?3.3.2. Características

        Simplicidad: Un DTO es un objeto simple que contiene atributos y métodos para
        acceder y modificar estos atributos (getters y setters). No contiene lógica
        empresarial ni comportamientos complejos.

        Eficiencia: Los DTOs son utilizados para agrupar y transferir múltiples datos en
        una sola llamada de red o entre componentes de un sistema, lo que puede reducir
        la sobrecarga de la red y aumentar la eficiencia.

        Encapsulación: Encapsulan los datos que necesitan ser transferidos entre
        procesos o entre la red, asegurándose de que los datos internos del objeto no
        sean expuestos directamente.

        Serialización: Los DTOs se pueden serializar en varios formatos como XML,
        JSON, etc., lo que permite una fácil transferencia de datos a través de la red.
        Estructurados según las necesidades del cliente: A diferencia de los objetos de
        dominio que están estructurados según las necesidades de la lógica empresarial,
        los DTOs se estructuran según las necesidades del cliente que recibe los datos.
        Esto significa que puedes tener varios DTOs para el mismo objeto de dominio,
        cada uno optimizado para diferentes vistas o diferentes consumidores de los
        datos.

        Reducen la acoplamiento: Debido a que los DTOs se utilizan para transferir
        datos entre capas o componentes, ayudan a reducir el acoplamiento entre estos
        componentes. Esto significa que los cambios en un componente no necesitan
        propagarse a otros componentes siempre y cuando el DTO se mantenga
        constante.

        *!3.3.3. Que es class-transformer

        class-transformer es una biblioteca en Node.js que permite transformar objetos
        de tipo "plano" o JSON en instancias de clases y viceversa. Esta librería es muy
        útil en conjunción con el patrón Data Transfer Object (DTO), en donde los DTOs a
        menudo se crean como clases.

        La biblioteca ofrece un conjunto de funciones útiles, como:

        classToPlain: Convierte la instancia de una clase a un objeto plano.

        plainToClass: Convierte un objeto plano a una instancia de una clase específica.

        classToClass: Crea una nueva copia de la instancia de una clase.

        classToClassFromExist: Crea una nueva copia de la instancia de una clase,
        manteniendo los valores existentes en la instancia objetivo.

        Además, la biblioteca class-transformer permite controlar más a fondo el proceso
        de transformación utilizando decoradores, lo que te permite especificar cómo se
        deben manejar ciertos campos durante la transformación.

        Por ejemplo, puedes excluir ciertos campos de la transformación, cambiar el
        nombre de un campo, transformar el valor de un campo (por ejemplo, convertir
        una cadena en un número), y mucho más.

        Esta biblioteca es especialmente útil cuando se trabaja con marcos como
        Express.js y se utiliza junto con la biblioteca class-validator para la validación del
        lado del servidor en aplicaciones Node.js.

        *!3.3.4. Instalación de class-transformer para ‘Windows y Linux’

        Para instalar class-transformer en un sistema Linux con Node.js, necesitarás
        usar npm (el administrador de paquetes de Node.js). Abre una terminal y escribe
        los siguientes comandos:
        “npm i -E -D class-transformer”
        “npm i -E -D reflect-metadata”: https://github.com/rbuckton/reflect-metadata
        “npm i -E -D class-validator”: https://github.com/typestack/class-validator
        “npm i -E -D typescript”

        Una vez que tienes TypeScript instalado, puedes iniciar un archivo tsconfig.json
        usando el siguiente comando en la raíz de tu proyecto: “npx tsc --init”

        Esto creará un archivo tsconfig.json en tu directorio de proyecto con una
        configuración predeterminada. Puedes modificar este archivo según las
        necesidades de tu proyecto.

        Ajustaremos la configuración por defecto proporcionada por el comando anterior.
        En el archivo tsconfig.json, estableceremos una configuración que sea
        compatible con las dependencias "class-transformer" y "reflect-metadata".

        En el archivo package.json, organizaremos el proceso para convertir el código
        TypeScript a JavaScript utilizando el comando 'tsc'. Este proceso se realizará de
        forma independiente de 'nodemon

        *!3.4 Que es JWT ‘JSON Web Token’

        *!3.4.1. Introducción

        JWT (JSON Web Token) es un estándar abierto (RFC 7519) que define una forma
        compacta y autónoma de transmitir información entre dos partes en forma de
        objeto JSON. Es comúnmente utilizado para autenticar usuarios y garantizar la
        integridad de la información entre un cliente (generalmente un navegador web) y
        un servidor o servicio.

        Un JWT consta de tres partes separadas por puntos ('.'): el encabezado, los datos
        o carga útil (payload) y una firma. La estructura general de un JWT es la siguiente:
        xxxxx.yyyyy.zzzzz

        xxxxx: Encabezado (Header) codificado en Base64url, que contiene información
        sobre el algoritmo de firma y el tipo de token.

        yyyyy: Datos o carga útil (Payload) codificado en Base64url, que contiene los
        datos que se desean transmitir entre las partes. Puede incluir información como el
        identificador del usuario, roles, permisos, etc.

        zzzzz: Firma digital que asegura que el token no ha sido modificado en el camino y
        puede ser verificado por el servidor. La firma se genera utilizando el encabezado
        codificado, la carga útil codificada, una clave secreta (en el caso de JWT con
        cifrado HMAC) o una clave pública/privada (en el caso de JWT con cifrado RSA).
        Los JWT son ampliamente utilizados en aplicaciones web y API RESTful como
        mecanismo de autenticación y autorización, ya que son compactos, seguros y
        autocontenido. Almacenar la información relevante en el token permite que los
        servidores no necesiten mantener un estado de sesión, lo que facilita la
        escalabilidad y la distribución del sistema.

        Es importante tener en cuenta que, debido a que el contenido de un JWT está
        codificado en Base64url y no cifrado, cualquier persona que tenga acceso al token
        puede leer su contenido. Por lo tanto, es esencial no almacenar información
        sensible como contraseñas en el token y utilizar siempre una conexión segura
        (HTTPS) para transmitir los tokens entre el cliente y el servidor. https://jwt.io/

        *!3.4.1. Que es “jose”

        En el contexto de npm, "jose" es una librería que proporciona funcionalidades
        relacionadas con JSON Object Signing and Encryption (JOSE). JOSE es un
        conjunto de especificaciones que define métodos para firmar y cifrar objetos
        JSON, que a su vez se utilizan para crear y validar JSON Web Tokens (JWT).

        La librería "jose" de npm permite trabajar con tokens JWT de una manera más
        sencilla y segura, ya que proporciona métodos para generar firmas digitales (JWS
        - JSON Web Signature) y cifrado (JWE - JSON Web Encryption), además de
        permitir verificar la autenticidad de los tokens y desencriptarlos.

        Algunas de las funcionalidades que ofrece la librería "jose" incluyen:
        *? Generar y verificar tokens JWT firmados.
        *? Generar y verificar tokens JWT cifrados.
        *? Soporte para múltiples algoritmos de firma y cifrado, como RS256, S256, ES256, entre otros.
        *? Manipulación de claves públicas y privadas para la firma y el cifrado.
        *? Creación y verificación de claves JSON Web Key (JWK).

        Esta librería puede ser útil para implementar autenticación y autorización en
        aplicaciones web y servicios que utilicen tokens JWT, ya que simplifica el proceso
        de generación y validación de estos tokens. Es importante utilizar la librería "jose"
        con precaución y siguiendo buenas prácticas de seguridad para garantizar la
        integridad y la confidencialidad de los tokens utilizados en la aplicación.

        *!3.4.2. Instalación de jose para ‘Windows y Linux’
        
        1. Abre una terminal o línea de comandos en tu sistema operativo.
        2. Navega hasta el directorio de tu proyecto o donde desees instalar la librería
        "jose".
        3. Ejecuta el siguiente comando para instalar "jose" desde npm: “npm i -E -
        D jose”

 */