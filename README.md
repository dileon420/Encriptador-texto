# Encriptador y Desencriptador de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar texto, transformando letras específicas en secuencias de caracteres definidas y viceversa. También incluye la funcionalidad para copiar el texto encriptado o desencriptado al portapapeles.

## Funcionalidades Principales

### 1. Encriptar Texto

La función `encriptar()` convierte un texto ingresado en un formato encriptado según las siguientes reglas:

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

**Validación:** El texto debe contener solo letras minúsculas, sin acentos ni caracteres especiales.

**Flujo de trabajo:**
- Muestra el texto encriptado en un área de texto.
- Habilita el botón de desencriptar y deshabilita el de encriptar.
- Cambia el estilo de los botones para reflejar su estado activo/inactivo.
- Limpia el campo de entrada después de la encriptación.

### 2. Desencriptar Texto

La función `desencriptar()` revierte el proceso de encriptación, devolviendo el texto a su formato original.

**Validación:** El texto debe cumplir con las mismas reglas que la encriptación.

**Flujo de trabajo:**
- Identifica y reemplaza las secuencias encriptadas (`enter`, `imes`, `ai`, `ober`, `ufat`) con sus respectivas letras (`e`, `i`, `a`, `o`, `u`).
- Muestra el texto desencriptado en el área de texto.
- Habilita el botón de encriptar y deshabilita el de desencriptar.
- Cambia el estilo de los botones para reflejar su estado activo/inactivo.
- Limpia el campo de entrada después de la desencriptación.

### 3. Copiar Texto

La función `copiar()` permite copiar el texto encriptado o desencriptado al portapapeles.

**Flujo de trabajo:**
- Utiliza la API del portapapeles del navegador para copiar el contenido.
- Muestra una alerta confirmando que el texto ha sido copiado exitosamente.

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica del contenido.
- **CSS**: Para el diseño y estilo visual de la aplicación.
- **JavaScript**: Para implementar la lógica de encriptación, desencriptación y copiado del texto.

