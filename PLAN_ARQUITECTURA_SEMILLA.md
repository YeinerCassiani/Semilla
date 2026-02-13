# 🌱 SEMILLA - Plan de Arquitectura y Desarrollo

## Plataforma de Comercialización Directa para Campesinos Colombianos

---

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Análisis del Usuario](#análisis-del-usuario)
3. [Arquitectura Técnica](#arquitectura-técnica)
4. [Diseño UX/UI](#diseño-uxui)
5. [Estructura de Componentes](#estructura-de-componentes)
6. [Flujos de Usuario](#flujos-de-usuario)
7. [Modelo de Datos](#modelo-de-datos)
8. [Fases de Desarrollo](#fases-de-desarrollo)
9. [Métricas y KPIs](#métricas-y-kpis)

---

## 1. Resumen Ejecutivo

### 🎯 Objetivo

Desarrollar una aplicación web **100% frontend** que conecte campesinos colombianos con compradores, eliminando intermediarios y facilitando la comercialización directa de productos agrícolas.

### ⚠️ Restricciones Técnicas

| Restricción            | Solución                        |
| ---------------------- | ------------------------------- |
| Sin backend            | Datos mock + persistencia local |
| Sin APIs externas      | Simulación de servicios         |
| Sin autenticación real | Login simulado con localStorage |
| Sin base de datos      | IndexedDB + localStorage        |

### 🏆 Propuesta de Valor

- **Venta directa** sin intermediarios
- **Precio justo** para el campesino
- **Simplicidad** para usuarios con baja alfabetización digital
- **Confianza** mediante diseño transparente y educación

---

## 2. Análisis del Usuario

### 👩‍🌾 Persona Principal: Marta González

```
┌─────────────────────────────────────────────────────────────┐
│  MARTA GONZÁLEZ - Usuario Primario                          │
├─────────────────────────────────────────────────────────────┤
│  Edad: 49 años                                              │
│  Ocupación: Campesina (cultivo de mango)                    │
│  Ubicación: Zona rural, Colombia                            │
│  Dispositivo: Celular Android básico                        │
├─────────────────────────────────────────────────────────────┤
│  LIMITACIONES:                                              │
│  • Bajo conocimiento digital                                │
│  • Uso básico del celular (WhatsApp, llamadas)              │
│  • Desconfianza hacia plataformas digitales                 │
│  • Conectividad irregular                                   │
├─────────────────────────────────────────────────────────────┤
│  NECESIDAD CLAVE:                                           │
│  "Quiero vender y saber a qué precio real salen mis         │
│   productos, sin que me roben los intermediarios"           │
└─────────────────────────────────────────────────────────────┘
```

### 🎭 Personas Secundarias

| Persona                | Rol                   | Necesidad Principal              |
| ---------------------- | --------------------- | -------------------------------- |
| **Carlos** (35 años)   | Comprador urbano      | Productos frescos a buen precio  |
| **Don José** (62 años) | Productor mayor       | Interfaz aún más simple          |
| **Laura** (28 años)    | Compradora consciente | Apoyar al campesino directamente |

### 📊 Implicaciones de Diseño

```
PRINCIPIOS DERIVADOS DEL USUARIO:

1. SIMPLICIDAD EXTREMA
   └── Máximo 3 pasos por acción
   └── Un objetivo por pantalla
   └── Botones grandes y claros

2. LEGIBILIDAD
   └── Texto mínimo 18px
   └── Contraste alto
   └── Íconos + texto siempre

3. CONFIANZA
   └── Lenguaje cercano y cálido
   └── Confirmaciones visuales
   └── Sin jerga técnica

4. RESILIENCIA
   └── Funciona offline (datos locales)
   └── Recuperación de errores amigable
   └── Sin dependencias externas críticas
```

---

## 3. Arquitectura Técnica

### 🛠️ Stack Tecnológico

```
┌─────────────────────────────────────────────────────────────┐
│                    STACK TECNOLÓGICO                        │
├─────────────────────────────────────────────────────────────┤
│  FRAMEWORK:     React 18+ con Vite                          │
│  ESTILOS:       CSS Vanilla + Variables CSS                 │
│  ROUTING:       React Router DOM v6                         │
│  ESTADO:        Context API + useReducer                    │
│  PERSISTENCIA:  localStorage + IndexedDB                    │
│  BUNDLER:       Vite                                        │
│  TIPOGRAFÍA:    Google Fonts (Nunito/Outfit)                │
└─────────────────────────────────────────────────────────────┘
```

### 💡 Justificación de React + Vite

| Criterio                 | Justificación                                |
| ------------------------ | -------------------------------------------- |
| **Componentización**     | Permite crear UI reutilizable y mantenible   |
| **Hooks**                | Manejo simple de estado local y efectos      |
| **Ecosistema**           | Gran comunidad y recursos disponibles        |
| **Rendimiento**          | Vite ofrece HMR rápido y builds optimizados  |
| **Curva de aprendizaje** | Moderada, bien documentado                   |
| **Sin backend**          | Fácil integración con localStorage/IndexedDB |

### 📁 Estructura de Carpetas

```
semilla/
├── public/
│   ├── images/
│   │   ├── productos/          # Placeholders de productos
│   │   ├── icons/              # Íconos del sistema
│   │   └── illustrations/      # Ilustraciones decorativas
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── common/             # Componentes base reutilizables
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Loader/
│   │   │   ├── Toast/
│   │   │   └── Icon/
│   │   │
│   │   ├── layout/             # Estructura de página
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   ├── BottomNav/
│   │   │   └── Container/
│   │   │
│   │   └── features/           # Componentes por feature
│   │       ├── auth/
│   │       ├── products/
│   │       ├── marketplace/
│   │       ├── chat/
│   │       ├── education/
│   │       └── help/
│   │
│   ├── pages/                  # Vistas principales
│   │   ├── Landing/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── Marketplace/
│   │   ├── ProductDetail/
│   │   ├── MyProducts/
│   │   ├── PublishProduct/
│   │   ├── Chat/
│   │   ├── Education/
│   │   └── Help/
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useAuth.js
│   │   ├── useProducts.js
│   │   ├── useChat.js
│   │   ├── useLocalStorage.js
│   │   └── useMetrics.js
│   │
│   ├── context/                # Context providers
│   │   ├── AuthContext.jsx
│   │   ├── ProductsContext.jsx
│   │   ├── ChatContext.jsx
│   │   └── MetricsContext.jsx
│   │
│   ├── services/               # Servicios de datos
│   │   ├── storage.service.js      # localStorage wrapper
│   │   ├── indexedDB.service.js    # IndexedDB wrapper
│   │   ├── products.service.js
│   │   ├── users.service.js
│   │   ├── chat.service.js
│   │   └── metrics.service.js
│   │
│   ├── data/                   # Mock data
│   │   ├── products.mock.js
│   │   ├── users.mock.js
│   │   ├── categories.mock.js
│   │   ├── locations.mock.js
│   │   └── messages.mock.js
│   │
│   ├── utils/                  # Utilidades
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── styles/                 # Estilos globales
│   │   ├── variables.css       # Variables CSS
│   │   ├── reset.css           # Reset/Normalize
│   │   ├── global.css          # Estilos globales
│   │   ├── typography.css      # Tipografía
│   │   ├── utilities.css       # Clases utilitarias
│   │   └── animations.css      # Animaciones
│   │
│   ├── App.jsx
│   ├── Router.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### 🔄 Diagrama de Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         NAVEGADOR                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐      │
│   │   PAGES     │────▶│ COMPONENTS  │────▶│   STYLES    │      │
│   │  (Vistas)   │     │(Reutilizables)    │   (CSS)     │      │
│   └──────┬──────┘     └──────┬──────┘     └─────────────┘      │
│          │                   │                                  │
│          ▼                   ▼                                  │
│   ┌─────────────────────────────────────┐                      │
│   │            CONTEXT API              │                      │
│   │  (AuthContext, ProductsContext...)  │                      │
│   └──────────────────┬──────────────────┘                      │
│                      │                                          │
│                      ▼                                          │
│   ┌─────────────────────────────────────┐                      │
│   │            SERVICES                  │                      │
│   │  (storage, products, chat, etc.)    │                      │
│   └──────────────────┬──────────────────┘                      │
│                      │                                          │
│          ┌───────────┴───────────┐                             │
│          ▼                       ▼                              │
│   ┌─────────────┐         ┌─────────────┐                      │
│   │ localStorage│         │  IndexedDB  │                      │
│   │  (Sesión)   │         │  (Datos)    │                      │
│   └─────────────┘         └─────────────┘                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Diseño UX/UI

### 🎨 Sistema de Diseño

#### Paleta de Colores

```css
/* COLORES PRIMARIOS - Campo Colombiano */
--color-primary-900: #1b4332; /* Verde muy oscuro */
--color-primary-800: #2d6a4f; /* Verde profundo */
--color-primary-700: #40916c; /* Verde bosque */
--color-primary-600: #52b788; /* Verde medio */
--color-primary-500: #74c69d; /* Verde claro */
--color-primary-400: #95d5b2; /* Verde suave */
--color-primary-300: #b7e4c7; /* Verde pastel */
--color-primary-200: #d8f3dc; /* Verde muy claro */

/* COLORES SECUNDARIOS - Tierra */
--color-secondary-600: #8b5a2b; /* Marrón oscuro */
--color-secondary-500: #a0522d; /* Tierra */
--color-secondary-400: #d4a373; /* Marrón claro */
--color-secondary-300: #e6ccb2; /* Beige */

/* COLORES NEUTROS */
--color-background: #fefae0; /* Crema natural */
--color-surface: #ffffff; /* Blanco */
--color-text-primary: #1b4332; /* Verde oscuro */
--color-text-secondary: #40916c; /* Verde medio */
--color-text-muted: #6b7280; /* Gris */

/* COLORES DE ESTADO */
--color-success: #40916c; /* Verde */
--color-warning: #f59e0b; /* Amarillo */
--color-error: #e63946; /* Rojo */
--color-info: #3b82f6; /* Azul */
```

#### Tipografía

```css
/* FUENTES */
--font-family-primary: "Nunito", "Outfit", sans-serif;
--font-family-display: "Nunito", sans-serif;

/* TAMAÑOS - Escala para legibilidad */
--font-size-xs: 14px;
--font-size-sm: 16px;
--font-size-base: 18px; /* Mínimo para texto */
--font-size-lg: 20px;
--font-size-xl: 24px;
--font-size-2xl: 28px;
--font-size-3xl: 32px;
--font-size-4xl: 40px;

/* PESOS */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* ALTURA DE LÍNEA */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

#### Espaciado

```css
/* ESPACIADO - Sistema de 8px */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
```

#### Componentes Base

```css
/* BOTONES */
--button-height-sm: 40px;
--button-height-md: 48px;
--button-height-lg: 56px;
--button-radius: 12px;
--button-padding: 16px 24px;

/* INPUTS */
--input-height: 52px;
--input-radius: 12px;
--input-padding: 16px;

/* CARDS */
--card-radius: 16px;
--card-padding: 20px;
--card-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

/* MODALES */
--modal-radius: 20px;
--modal-padding: 24px;
```

### 📐 Principios de Diseño

```
┌─────────────────────────────────────────────────────────────┐
│                  PRINCIPIOS UX PARA MARTA                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. 👆 TÁCTIL PRIMERO                                       │
│     • Áreas táctiles mínimo 48x48px                         │
│     • Espacio entre elementos interactivos                  │
│     • Botones con feedback visual                           │
│                                                             │
│  2. 📝 TEXTO CLARO                                          │
│     • Lenguaje coloquial colombiano                         │
│     • Sin tecnicismos                                       │
│     • Frases cortas y directas                              │
│                                                             │
│  3. 🎯 UN OBJETIVO POR PANTALLA                             │
│     • Evitar sobrecarga cognitiva                           │
│     • Jerarquía visual clara                                │
│     • CTA principal prominente                              │
│                                                             │
│  4. 🔄 FEEDBACK CONSTANTE                                   │
│     • Confirmaciones visuales                               │
│     • Estados de carga claros                               │
│     • Mensajes de éxito/error amigables                     │
│                                                             │
│  5. 🆘 AYUDA SIEMPRE VISIBLE                                │
│     • Botón de ayuda flotante                               │
│     • Tooltips descriptivos                                 │
│     • FAQs accesibles                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 📱 Diseño Responsive (Mobile First)

```
BREAKPOINTS:

Mobile:     320px - 480px   (Diseño base)
Tablet:     481px - 768px
Desktop:    769px - 1024px
Wide:       1025px+

ESTRATEGIA:
┌────────────┐     ┌────────────┐     ┌────────────┐
│   MOBILE   │────▶│   TABLET   │────▶│  DESKTOP   │
│   (Base)   │     │ (Expandir) │     │ (Optimizar)│
└────────────┘     └────────────┘     └────────────┘
```

---

## 5. Estructura de Componentes

### 🧩 Componentes Comunes

```
BUTTON
├── Variantes: primary, secondary, outline, ghost
├── Tamaños: sm, md, lg
├── Estados: default, hover, active, disabled, loading
├── Props: label, icon, iconPosition, fullWidth, onClick
└── Accesibilidad: aria-label, role="button"

INPUT
├── Tipos: text, tel, number, textarea
├── Estados: default, focus, error, disabled
├── Props: label, placeholder, helper, error, icon
└── Validación: inline, onBlur

CARD
├── Variantes: product, info, stat
├── Props: header, body, footer, image, onClick
└── Interactivo: hover effect, clickable

MODAL
├── Tipos: dialog, confirm, form
├── Props: title, content, actions, onClose
└── Accesibilidad: focus trap, escape to close

TOAST
├── Tipos: success, error, warning, info
├── Props: message, duration, action
└── Posición: bottom-center (móvil)

LOADER
├── Tipos: spinner, skeleton, progress
├── Props: size, message
└── Estados: loading, loaded
```

### 📄 Estructura de Páginas

```
LANDING PAGE
├── Hero Section
│   ├── Título principal
│   ├── Subtítulo descriptivo
│   ├── CTA primario: "Soy Campesino"
│   └── CTA secundario: "Soy Comprador"
├── Beneficios Section
│   ├── Venta directa
│   ├── Precio justo
│   └── Sin intermediarios
├── Cómo Funciona Section
│   ├── Paso 1: Registrarse
│   ├── Paso 2: Publicar/Buscar
│   └── Paso 3: Conectar
├── Testimonios Section (mock)
└── Footer
    ├── Links útiles
    └── Información de contacto

AUTH PAGE (Login/Registro)
├── Header simple
├── Formulario
│   ├── Nombre (input)
│   ├── Teléfono (input tel)
│   └── Rol (buttons selector)
├── Botón "Entrar"
└── Link "¿Necesitas ayuda?"

DASHBOARD - PRODUCTOR
├── Header con saludo personalizado
├── Stats Cards
│   ├── Productos publicados
│   ├── Mensajes nuevos
│   └── Contactos recientes
├── Mis Productos (grid)
├── FAB: "Publicar Producto"
└── Bottom Navigation

DASHBOARD - COMPRADOR
├── Header con búsqueda
├── Categorías destacadas
├── Productos recomendados
├── Productos cerca de ti
└── Bottom Navigation

MARKETPLACE
├── Header con búsqueda
├── Filtros
│   ├── Categoría
│   ├── Ubicación
│   └── Precio
├── Grid de productos
└── Bottom Navigation

PRODUCT DETAIL
├── Imagen grande
├── Info del producto
│   ├── Nombre
│   ├── Precio
│   ├── Ubicación
│   └── Descripción
├── Info del vendedor
├── CTA: "Hablar con el campesino"
└── Productos relacionados

PUBLISH PRODUCT (Wizard)
├── Progress indicator
├── Paso 1: Nombre
├── Paso 2: Foto
├── Paso 3: Categoría
├── Paso 4: Precio
├── Paso 5: Ubicación
├── Confirmación
└── Navegación: Anterior/Siguiente

CHAT
├── Lista de conversaciones
├── Chat activo
│   ├── Header (info contacto)
│   ├── Mensajes
│   ├── Respuestas rápidas
│   └── Input mensaje
└── Bottom Navigation

EDUCATION (Aprende)
├── Categorías de contenido
├── Cards de contenido
│   ├── Videos (placeholder)
│   ├── Tips de venta
│   └── Seguridad digital
└── Bottom Navigation

HELP
├── Preguntas frecuentes (accordion)
├── Contacto de emergencia
└── Mensajes de confianza
```

---

## 6. Flujos de Usuario

### 🔄 Flujo 1: Registro/Login

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUJO DE REGISTRO                        │
└─────────────────────────────────────────────────────────────┘

     ┌─────────┐
     │ Landing │
     └────┬────┘
          │
          ▼
   ┌──────────────┐
   │ "Soy Campesino" │    ─────▶  rol = "productor"
   │      o        │
   │ "Soy Comprador"│    ─────▶  rol = "comprador"
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Formulario  │
   │   • Nombre    │
   │   • Teléfono  │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Validar    │
   │   datos      │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Guardar en │
   │  localStorage │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Dashboard  │
   │   según rol  │
   └──────────────┘

DATOS GUARDADOS:
{
  id: "uuid",
  nombre: "Marta González",
  telefono: "3001234567",
  rol: "productor",
  fechaRegistro: "2024-01-15",
  ultimoAcceso: "2024-01-15"
}
```

### 🔄 Flujo 2: Publicar Producto (Productor)

```
┌─────────────────────────────────────────────────────────────┐
│                 FLUJO PUBLICAR PRODUCTO                     │
└─────────────────────────────────────────────────────────────┘

     ┌───────────┐
     │ Dashboard │
     └─────┬─────┘
           │
           ▼
    ┌─────────────┐
    │ FAB "Publicar │
    │   Producto"  │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐      ┌─────────────┐
    │  PASO 1/5   │──────│  ¿Qué vas   │
    │   Nombre    │      │  a vender?  │
    └──────┬──────┘      └─────────────┘
           │
           ▼
    ┌─────────────┐      ┌─────────────┐
    │  PASO 2/5   │──────│   Sube una  │
    │    Foto     │      │    foto     │
    └──────┬──────┘      └─────────────┘
           │
           ▼
    ┌─────────────┐      ┌─────────────┐
    │  PASO 3/5   │──────│  ¿De qué    │
    │  Categoría  │      │  tipo es?   │
    └──────┬──────┘      └─────────────┘
           │
           ▼
    ┌─────────────┐      ┌─────────────┐
    │  PASO 4/5   │──────│  ¿A cuánto  │
    │   Precio    │      │  lo vendes? │
    └──────┬──────┘      │             │
           │             │ Precio      │
           │             │ sugerido:   │
           │             │ $X,XXX/kg   │
           │             └─────────────┘
           ▼
    ┌─────────────┐      ┌─────────────┐
    │  PASO 5/5   │──────│  ¿Desde     │
    │  Ubicación  │      │  dónde?     │
    └──────┬──────┘      └─────────────┘
           │
           ▼
    ┌─────────────┐
    │ Confirmación│
    │  ✓ ¡Listo!  │
    │  Tu producto│
    │  ya está    │
    │  publicado  │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │ Mis Productos│
    └─────────────┘
```

### 🔄 Flujo 3: Comprar/Contactar (Comprador)

```
┌─────────────────────────────────────────────────────────────┐
│                 FLUJO CONTACTAR PRODUCTOR                   │
└─────────────────────────────────────────────────────────────┘

     ┌───────────┐
     │ Marketplace│
     └─────┬─────┘
           │
           ▼
    ┌─────────────┐
    │  Ver Card   │
    │  Producto   │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   Detalle   │
    │  Producto   │
    │             │
    │  • Nombre   │
    │  • Precio   │
    │  • Ubicación│
    │  • Vendedor │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  "Hablar con│
    │ el campesino"│
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │    CHAT     │
    │             │
    │ Respuestas  │
    │  rápidas:   │
    │ • "Hola..."  │
    │ • "¿Tiene    │
    │   más?"     │
    │ • "¿Cómo    │
    │   llego?"   │
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  Mensajes   │
    │  guardados  │
    │  en local   │
    └─────────────┘
```

---

## 7. Modelo de Datos

### 📊 Esquemas de Datos

```javascript
// ==========================================
// USUARIO
// ==========================================
const User = {
  id: "uuid-v4",
  nombre: "Marta González",
  telefono: "3001234567",
  rol: "productor", // "productor" | "comprador"
  ubicacion: {
    departamento: "Cundinamarca",
    municipio: "Fusagasugá",
    vereda: "La Venta",
  },
  avatar: null, // URL o null
  fechaRegistro: "2024-01-15T10:30:00Z",
  ultimoAcceso: "2024-01-15T10:30:00Z",
  activo: true,
};

// ==========================================
// PRODUCTO
// ==========================================
const Product = {
  id: "uuid-v4",
  vendedorId: "user-uuid",
  nombre: "Mango Tommy",
  descripcion: "Mango fresco de mi finca",
  categoria: "frutas", // frutas, verduras, granos, lacteos, carnes, otros
  subcategoria: "mango",
  foto: "/images/productos/mango-tommy.jpg",
  precio: 3500, // COP por unidad
  unidad: "kg", // kg, libra, unidad, canasta, docena
  cantidadDisponible: 50,
  precioSugerido: 4000, // Precio de mercado (mock)
  ubicacion: {
    departamento: "Cundinamarca",
    municipio: "Fusagasugá",
  },
  estado: "disponible", // disponible, vendido, pausado
  fechaPublicacion: "2024-01-15T10:30:00Z",
  fechaActualizacion: "2024-01-15T10:30:00Z",
  vistas: 12,
  contactos: 3,
};

// ==========================================
// CONVERSACIÓN
// ==========================================
const Conversation = {
  id: "uuid-v4",
  productoId: "product-uuid",
  compradorId: "user-uuid",
  vendedorId: "user-uuid",
  estado: "activa", // activa, archivada
  fechaInicio: "2024-01-15T11:00:00Z",
  ultimoMensaje: {
    texto: "¿A qué hora puedo pasar?",
    fecha: "2024-01-15T11:30:00Z",
    remitenteId: "user-uuid",
  },
  mensajesNoLeidos: {
    comprador: 0,
    vendedor: 1,
  },
};

// ==========================================
// MENSAJE
// ==========================================
const Message = {
  id: "uuid-v4",
  conversacionId: "conversation-uuid",
  remitenteId: "user-uuid",
  texto: "Hola, me interesa su mango",
  fecha: "2024-01-15T11:00:00Z",
  leido: true,
  tipo: "texto", // texto, rapida (respuesta rápida)
};

// ==========================================
// CATEGORÍA
// ==========================================
const Category = {
  id: "frutas",
  nombre: "Frutas",
  icono: "🍎",
  color: "#E63946",
  subcategorias: [
    { id: "mango", nombre: "Mango" },
    { id: "naranja", nombre: "Naranja" },
    { id: "platano", nombre: "Plátano" },
  ],
};

// ==========================================
// CONTENIDO EDUCATIVO
// ==========================================
const EducationalContent = {
  id: "uuid-v4",
  titulo: "Cómo tomar mejores fotos",
  tipo: "video", // video, articulo, tip
  categoria: "ventas", // ventas, seguridad, tecnologia
  thumbnail: "/images/education/fotos-thumb.jpg",
  contenido: "...", // URL video o texto
  duracion: "3 min", // para videos
  orden: 1,
  activo: true,
};

// ==========================================
// MÉTRICAS (Simuladas)
// ==========================================
const Metrics = {
  userId: "user-uuid",
  tiempoRegistro: 45, // segundos
  productosPublicados: 5,
  productosVendidos: 2,
  contactosRecibidos: 12,
  contactosRealizados: 8,
  mensajesEnviados: 34,
  sesiones: 15,
  tiempoPromedioPorSesion: 180, // segundos
};
```

### 💾 Estrategia de Persistencia

```
┌─────────────────────────────────────────────────────────────┐
│                 ESTRATEGIA DE PERSISTENCIA                  │
└─────────────────────────────────────────────────────────────┘

localStorage (Datos simples y sesión)
├── semilla_user          → Usuario actual
├── semilla_session       → Datos de sesión
├── semilla_preferences   → Preferencias UI
└── semilla_metrics       → Métricas del usuario

IndexedDB (Datos complejos y voluminosos)
├── products              → Todos los productos
├── conversations         → Conversaciones
├── messages              → Mensajes
├── categories            → Categorías
└── education             → Contenido educativo

INICIALIZACIÓN:
1. Al cargar la app, verificar si hay datos en IndexedDB
2. Si está vacío, cargar mock data inicial
3. Los cambios del usuario se guardan en tiempo real
4. Opción de "resetear" datos para demostración
```

---

## 8. Fases de Desarrollo

### 📅 Cronograma General

```
┌─────────────────────────────────────────────────────────────┐
│                   CRONOGRAMA DE DESARROLLO                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FASE 1: Fundamentos         ████████░░░░░░░░░░░░  Semana 1 │
│  FASE 2: Landing + Auth      ░░░░░░░░████████░░░░  Semana 2 │
│  FASE 3: Dashboard + CRUD    ░░░░░░░░░░░░░░░░████  Semana 3 │
│  FASE 4: Chat + Educación    ░░░░░░░░░░░░░░░░░░░░  Semana 4 │
│  FASE 5: Pulido + QA         ░░░░░░░░░░░░░░░░░░░░  Semana 5 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 📦 FASE 1: Fundamentos (Semana 1)

**Objetivo:** Establecer la base técnica y el sistema de diseño.

#### Tareas:

```
1.1 Configuración del Proyecto
    ├── Inicializar Vite + React
    ├── Configurar estructura de carpetas
    ├── Instalar dependencias (react-router-dom)
    └── Configurar ESLint + Prettier

1.2 Sistema de Diseño CSS
    ├── Crear variables.css (colores, tipografía, espaciado)
    ├── Crear reset.css
    ├── Crear typography.css
    ├── Crear utilities.css
    └── Crear animations.css

1.3 Componentes Base
    ├── Button (variantes, tamaños, estados)
    ├── Input (tipos, validación)
    ├── Card (producto, info)
    ├── Modal (dialog, confirm)
    ├── Toast (notificaciones)
    ├── Loader (spinner, skeleton)
    └── Icon (sistema de íconos)

1.4 Layout Components
    ├── Header
    ├── Footer
    ├── Container
    ├── BottomNav (navegación móvil)
    └── PageWrapper

1.5 Servicios de Persistencia
    ├── storage.service.js (wrapper localStorage)
    ├── indexedDB.service.js (wrapper IndexedDB)
    └── Funciones: get, set, remove, clear

1.6 Mock Data
    ├── products.mock.js (20+ productos)
    ├── users.mock.js (5+ usuarios)
    ├── categories.mock.js
    ├── locations.mock.js (departamentos/municipios)
    └── messages.mock.js
```

#### Entregables:

- [ ] Proyecto Vite configurado
- [ ] Sistema de diseño completo en CSS
- [ ] 7 componentes base funcionales
- [ ] 5 componentes de layout
- [ ] Servicios de persistencia
- [ ] Mock data cargable

---

### 📦 FASE 2: Landing + Autenticación (Semana 2)

**Objetivo:** Crear la experiencia de entrada y registro de usuarios.

#### Tareas:

```
2.1 Landing Page
    ├── Hero Section
    │   ├── Ilustración/imagen hero
    │   ├── Título: "Vende directo, gana más"
    │   ├── Subtítulo descriptivo
    │   └── CTAs: "Soy Campesino" / "Soy Comprador"
    ├── Beneficios Section
    │   ├── Card: Venta directa
    │   ├── Card: Precio justo
    │   └── Card: Sin intermediarios
    ├── Cómo Funciona Section
    │   ├── Paso 1: Regístrate
    │   ├── Paso 2: Publica/Busca
    │   └── Paso 3: Conecta
    ├── Testimonios Section (mock)
    └── Footer

2.2 Página de Registro/Login
    ├── Formulario simplificado
    │   ├── Input: Nombre
    │   ├── Input: Teléfono
    │   └── Selector: Rol (botones grandes)
    ├── Validación inline
    ├── Botón "Entrar"
    └── Link "Ayuda"

2.3 Context de Autenticación
    ├── AuthContext.jsx
    ├── useAuth hook
    ├── Funciones: login, logout, isAuthenticated
    └── Persistencia en localStorage

2.4 Routing
    ├── Router.jsx configurado
    ├── Rutas públicas (landing, auth)
    ├── Rutas protegidas (dashboard, etc.)
    └── ProtectedRoute component

2.5 Protección de Rutas
    ├── Redirección a login si no autenticado
    ├── Redirección a dashboard si autenticado
    └── Redirección según rol
```

#### Entregables:

- [ ] Landing page completa y responsive
- [ ] Flujo de registro funcional
- [ ] Sistema de autenticación simulado
- [ ] Routing configurado
- [ ] Persistencia de sesión

---

### 📦 FASE 3: Dashboard + Productos (Semana 3)

**Objetivo:** Implementar la funcionalidad core de productos.

#### Tareas:

```
3.1 Dashboard Productor
    ├── Header con saludo personalizado
    ├── Stats Cards
    │   ├── Productos publicados
    │   ├── Mensajes nuevos
    │   └── Contactos recientes
    ├── Grid "Mis Productos"
    │   ├── Product Card
    │   ├── Estado del producto
    │   └── Acciones: editar, pausar, eliminar
    └── FAB "Publicar Producto"

3.2 Dashboard Comprador
    ├── Header con búsqueda
    ├── Categorías destacadas (horizontal scroll)
    ├── "Productos cerca de ti"
    └── "Productos recomendados"

3.3 Publicar Producto (Wizard)
    ├── Progress Indicator
    ├── Paso 1: Nombre del producto
    ├── Paso 2: Foto (upload simulado/placeholder)
    ├── Paso 3: Categoría (selector visual)
    ├── Paso 4: Precio + precio sugerido
    ├── Paso 5: Ubicación (selects)
    ├── Pantalla de confirmación
    └── Animación de éxito

3.4 Marketplace
    ├── Barra de búsqueda
    ├── Filtros
    │   ├── Categoría
    │   ├── Ubicación
    │   └── Rango de precio
    ├── Grid de productos
    │   ├── Lazy loading simulado
    │   └── Empty state
    └── Ordenamiento (precio, reciente)

3.5 Detalle de Producto
    ├── Imagen grande
    ├── Información del producto
    ├── Información del vendedor
    ├── CTA "Hablar con el campesino"
    └── Productos relacionados

3.6 CRUD Productos
    ├── Crear producto
    ├── Leer productos (por usuario, todos)
    ├── Actualizar producto
    ├── Eliminar producto (soft delete)
    └── Cambiar estado

3.7 Context de Productos
    ├── ProductsContext.jsx
    ├── useProducts hook
    └── Funciones CRUD
```

#### Entregables:

- [ ] Dashboard productor funcional
- [ ] Dashboard comprador funcional
- [ ] Wizard de publicación completo
- [ ] Marketplace con filtros
- [ ] Detalle de producto
- [ ] CRUD completo con persistencia

---

### 📦 FASE 4: Chat + Educación (Semana 4)

**Objetivo:** Implementar comunicación y contenido educativo.

#### Tareas:

```
4.1 Sistema de Chat
    ├── Lista de conversaciones
    │   ├── Preview último mensaje
    │   ├── Badge mensajes no leídos
    │   └── Ordenar por reciente
    ├── Vista de chat
    │   ├── Header (info contacto + producto)
    │   ├── Burbujas de mensaje
    │   ├── Respuestas rápidas predefinidas
    │   │   ├── "Hola, ¿está disponible?"
    │   │   ├── "¿Tiene más cantidad?"
    │   │   ├── "¿Dónde puedo recogerlo?"
    │   │   └── "¿Cuál es el precio final?"
    │   └── Input de mensaje
    ├── Iniciar conversación desde producto
    └── Respuestas automáticas simuladas
        ├── "Sí, está disponible"
        ├── "Tengo [X] kg disponibles"
        └── "Puede venir a [ubicación]"

4.2 Context de Chat
    ├── ChatContext.jsx
    ├── useChat hook
    ├── Funciones: sendMessage, getConversations
    └── IndexedDB para mensajes

4.3 Canal Educativo
    ├── Página "Aprende"
    ├── Categorías de contenido
    │   ├── Ventas y negociación
    │   ├── Seguridad digital
    │   └── Uso de la app
    ├── Cards de contenido
    │   ├── Videos (placeholder YouTube/imagen)
    │   ├── Artículos cortos
    │   └── Tips rápidos
    └── Contenido destacado

4.4 Sistema de Ayuda
    ├── Botón flotante siempre visible
    ├── Modal de ayuda rápida
    ├── FAQs (acordeón)
    │   ├── "¿Cómo publico un producto?"
    │   ├── "¿Cómo contacto un comprador?"
    │   ├── "¿Es seguro usar esta app?"
    │   └── "¿Cómo edito mi perfil?"
    └── Mensajes de confianza

4.5 Métricas Simuladas
    ├── MetricsContext.jsx
    ├── useMetrics hook
    ├── Tracking:
    │   ├── Tiempo de registro
    │   ├── Productos publicados
    │   ├── Contactos realizados
    │   └── Mensajes enviados
    └── Dashboard de métricas (opcional)
```

#### Entregables:

- [ ] Sistema de chat funcional
- [ ] Respuestas rápidas implementadas
- [ ] Canal educativo con contenido
- [ ] Sistema de ayuda
- [ ] Métricas básicas funcionando

---

### 📦 FASE 5: Pulido y QA (Semana 5)

**Objetivo:** Optimizar, pulir y documentar.

#### Tareas:

```
5.1 Responsive Final
    ├── Testing en múltiples dispositivos
    ├── Ajustes de espaciado móvil
    ├── Optimización de imágenes
    └── Touch targets verification

5.2 Accesibilidad
    ├── ARIA labels
    ├── Navegación por teclado
    ├── Contraste de colores
    └── Textos alternativos

5.3 Optimización
    ├── Code splitting (lazy loading)
    ├── Optimización de bundle
    ├── Compresión de assets
    └── Performance audit

5.4 Animaciones y Transiciones
    ├── Page transitions
    ├── Micro-interacciones
    ├── Loading states
    └── Success/error animations

5.5 Testing Manual
    ├── Flujos principales
    ├── Edge cases
    ├── Diferentes navegadores
    └── Conexión lenta simulada

5.6 Documentación
    ├── README.md completo
    ├── Guía de instalación
    ├── Estructura del proyecto
    ├── Guía de uso
    └── Créditos y licencia

5.7 Demo y Presentación
    ├── Datos demo precargados
    ├── Capturas de pantalla
    ├── Video demo (opcional)
    └── Presentación del proyecto
```

#### Entregables:

- [ ] App 100% responsive
- [ ] Accesibilidad básica implementada
- [ ] Performance optimizada
- [ ] Animaciones pulidas
- [ ] Documentación completa
- [ ] Demo lista para presentación

---

## 9. Métricas y KPIs

### 📊 Métricas Simuladas a Trackear

```
┌─────────────────────────────────────────────────────────────┐
│                    MÉTRICAS DEL SISTEMA                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  USUARIO                                                    │
│  ├── Tiempo de registro (segundos)                         │
│  ├── Sesiones totales                                       │
│  ├── Tiempo promedio por sesión                             │
│  └── Última actividad                                       │
│                                                             │
│  PRODUCTOS                                                  │
│  ├── Total publicados                                       │
│  ├── Productos activos                                      │
│  ├── Productos vendidos                                     │
│  └── Vistas por producto                                    │
│                                                             │
│  INTERACCIONES                                              │
│  ├── Contactos iniciados                                    │
│  ├── Contactos recibidos                                    │
│  ├── Mensajes enviados                                      │
│  └── Conversaciones activas                                 │
│                                                             │
│  ENGAGEMENT                                                 │
│  ├── Contenido educativo visto                              │
│  ├── Ayuda consultada                                       │
│  └── FAQs leídos                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 🎯 KPIs de Éxito del Proyecto

| KPI                        | Meta          | Cómo Medir          |
| -------------------------- | ------------- | ------------------- |
| Tiempo de registro         | < 60 segundos | Métrica simulada    |
| Pasos para publicar        | ≤ 5 pasos     | Conteo de pantallas |
| Tiempo primera publicación | < 3 minutos   | Métrica simulada    |
| Abandono en wizard         | < 20%         | Tracking de pasos   |
| Uso de respuestas rápidas  | > 50%         | Conteo de uso       |

---

## 📝 Notas Finales

### Consideraciones Importantes

1. **Mobile First**: Todo el desarrollo debe iniciar desde móvil y escalar hacia arriba.

2. **Offline Capability**: La app debe funcionar sin conexión constante gracias a la persistencia local.

3. **Accesibilidad Cultural**: El lenguaje y diseño deben resonar con campesinos colombianos.

4. **Simplicidad > Features**: Mejor hacer pocas cosas muy bien que muchas cosas mal.

5. **Testing con Usuarios**: Idealmente probar con usuarios reales del target.

### Próximos Pasos

1. ✅ Revisar y aprobar este plan
2. ⏳ Configurar el proyecto (Fase 1.1)
3. ⏳ Crear sistema de diseño (Fase 1.2)
4. ⏳ Desarrollar componentes base (Fase 1.3)

---

> **Documento creado:** Febrero 2026  
> **Proyecto:** SEMILLA - Plataforma de Comercialización Directa  
> **Versión:** 1.0

---

_"Del campo a tu mesa, sin intermediarios"_ 🌱
