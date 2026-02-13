# 🌱 SEMILLA

<div align="center">

![SEMILLA Banner](https://img.shields.io/badge/SEMILLA-Plataforma_de_Comercialización_Directa-52b788?style=for-the-badge&logo=leaf&logoColor=white)

**Conectando campesinos colombianos con compradores, eliminando intermediarios**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

[Demo en Vivo](#) • [Documentación](#características) • [Reportar Bug](../../issues) • [Solicitar Feature](../../issues)

</div>

---

## 📖 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías](#️-tecnologías)
- [Inicio Rápido](#-inicio-rápido)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Diseño UX/UI](#-diseño-uxui)
- [Roadmap](#-roadmap)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Sobre el Proyecto

**SEMILLA** es una plataforma web progresiva diseñada específicamente para empoderar a los campesinos colombianos, permitiéndoles comercializar sus productos agrícolas directamente con compradores finales, eliminando intermediarios y maximizando sus ganancias.

### 🌟 Propuesta de Valor

| Beneficio             | Descripción                                                              |
| --------------------- | ------------------------------------------------------------------------ |
| 🤝 **Venta Directa**  | Conexión directa entre productores y compradores sin intermediarios      |
| 💰 **Precio Justo**   | Los campesinos establecen sus propios precios basados en el mercado real |
| 📱 **Simplicidad**    | Interfaz diseñada para usuarios con baja alfabetización digital          |
| 🔒 **Confianza**      | Sistema transparente con educación y soporte constante                   |
| 🆓 **Sin Comisiones** | Plataforma 100% gratuita para maximizar ganancias                        |

### 👥 Usuarios Objetivo

- **Productores Agrícolas**: Campesinos que buscan vender directamente su cosecha
- **Compradores Urbanos**: Personas que desean productos frescos a precios justos
- **Comerciantes Conscientes**: Quienes apoyan la economía local y el comercio justo

---

## ✨ Características Principales

### Para Productores 👨‍🌾

- ✅ **Publicación Simple de Productos** - Wizard paso a paso con validación intuitiva
- 📸 **Gestión de Imágenes** - Sube fotos de tus productos fácilmente
- 💬 **Chat Integrado** - Comunícate directamente con compradores interesados
- 📊 **Dashboard Personalizado** - Visualiza tus productos, mensajes y estadísticas
- 🎓 **Centro Educativo** - Aprende mejores prácticas de venta y seguridad digital

### Para Compradores 🛒

- 🔍 **Búsqueda Avanzada** - Filtra por categoría, ubicación y precio
- 🗺️ **Productos Cercanos** - Encuentra productores en tu región
- ⭐ **Información Detallada** - Conoce el origen y calidad de cada producto
- 💬 **Contacto Directo** - Negocia directamente con el productor
- 📱 **Experiencia Mobile-First** - Optimizado para dispositivos móviles

### Características Técnicas 🔧

- 🚀 **100% Frontend** - Sin dependencias de backend (ideal para demostración)
- 💾 **Persistencia Local** - Datos almacenados en localStorage e IndexedDB
- 📴 **Funciona Offline** - Acceso a datos guardados sin conexión
- ♿ **Accesible** - Cumple con estándares WCAG 2.1
- 🎨 **Diseño Premium** - Interfaz moderna con animaciones fluidas
- 📱 **Responsive** - Adaptado a móviles, tablets y desktop

---

## 🛠️ Tecnologías

### Core Stack

```
Frontend Framework    → React 19.2.0
Build Tool           → Vite 7.2.4
Routing              → React Router DOM 7.13.0
Styling              → CSS Vanilla + Variables CSS
Icons                → Lucide React 0.563.0
State Management     → Context API + useReducer
Data Persistence     → localStorage + IndexedDB (idb 8.0.3)
```

### Herramientas de Desarrollo

```
Linting              → ESLint 9.39.1
React Plugins        → React Hooks + React Refresh
Compiler             → SWC (via @vitejs/plugin-react-swc)
Package Manager      → pnpm
```

### Justificación del Stack

| Decisión        | Razón                                                      |
| --------------- | ---------------------------------------------------------- |
| **React**       | Componentización, hooks modernos, gran ecosistema          |
| **Vite**        | HMR ultra-rápido, builds optimizados, configuración mínima |
| **CSS Vanilla** | Control total, sin dependencias, mejor rendimiento         |
| **Context API** | Gestión de estado simple sin librerías adicionales         |
| **IndexedDB**   | Almacenamiento robusto para datos estructurados            |

---

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recomendado) o npm

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/semilla.git
cd semilla

# 2. Instalar dependencias
pnpm install
# o
npm install

# 3. Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev

# 4. Abrir en el navegador
# La aplicación estará disponible en http://localhost:5173
```

### Scripts Disponibles

```bash
pnpm dev       # Inicia servidor de desarrollo con HMR
pnpm build     # Genera build de producción optimizado
pnpm preview   # Preview del build de producción
pnpm lint      # Ejecuta ESLint para verificar código
```

### Build de Producción

```bash
# Generar build optimizado
pnpm build

# El build estará en la carpeta /dist
# Puedes servirlo con cualquier servidor estático
```

---

## 📁 Estructura del Proyecto

```
semilla/
├── public/                          # Archivos estáticos
│   └── images/                      # Imágenes e ilustraciones
│       ├── illustrations/           # Ilustraciones personalizadas
│       └── productos/               # Imágenes de productos
│
├── src/
│   ├── assets/                      # Assets del proyecto
│   │   └── fonts/                   # Fuentes personalizadas
│   │
│   ├── components/                  # Componentes React
│   │   ├── common/                  # Componentes reutilizables
│   │   │   ├── Button/              # Botón con variantes
│   │   │   ├── Card/                # Tarjetas de contenido
│   │   │   ├── Input/               # Inputs con validación
│   │   │   ├── Modal/               # Modales y diálogos
│   │   │   ├── Toast/               # Notificaciones
│   │   │   └── Loader/              # Indicadores de carga
│   │   │
│   │   ├── layout/                  # Componentes de layout
│   │   │   ├── Header/              # Encabezado principal
│   │   │   ├── Footer/              # Pie de página
│   │   │   ├── Container/           # Contenedor responsive
│   │   │   └── BottomNav/           # Navegación móvil
│   │   │
│   │   └── features/                # Componentes por feature
│   │       ├── ProductCard/         # Tarjeta de producto
│   │       ├── ProductForm/         # Formulario de publicación
│   │       ├── ChatMessage/         # Mensaje de chat
│   │       └── FilterBar/           # Barra de filtros
│   │
│   ├── pages/                       # Páginas/Vistas principales
│   │   ├── Landing/                 # Página de inicio
│   │   ├── Auth/                    # Login/Registro
│   │   ├── Dashboard/               # Dashboard por rol
│   │   ├── Marketplace/             # Mercado de productos
│   │   ├── ProductDetail/           # Detalle de producto
│   │   ├── Publish/                 # Publicar producto
│   │   ├── Chat/                    # Sistema de mensajería
│   │   ├── Education/               # Centro educativo
│   │   └── Help/                    # Ayuda y soporte
│   │
│   ├── context/                     # Context Providers
│   │   ├── AuthContext.jsx          # Autenticación y usuario
│   │   ├── ProductsContext.jsx      # Gestión de productos
│   │   ├── ChatContext.jsx          # Sistema de chat
│   │   └── MetricsContext.jsx       # Métricas y analytics
│   │
│   ├── hooks/                       # Custom Hooks
│   │   ├── useAuth.js               # Hook de autenticación
│   │   ├── useProducts.js           # Hook de productos
│   │   ├── useChat.js               # Hook de chat
│   │   └── useLocalStorage.js       # Hook de persistencia
│   │
│   ├── services/                    # Servicios de datos
│   │   ├── storage.service.js       # Wrapper de localStorage
│   │   ├── indexedDB.service.js     # Wrapper de IndexedDB
│   │   ├── products.service.js      # CRUD de productos
│   │   └── chat.service.js          # Gestión de mensajes
│   │
│   ├── data/                        # Datos mock
│   │   ├── products.mock.js         # Productos de ejemplo
│   │   ├── users.mock.js            # Usuarios de ejemplo
│   │   └── categories.mock.js       # Categorías predefinidas
│   │
│   ├── utils/                       # Utilidades
│   │   ├── formatters.js            # Formateo de datos
│   │   ├── validators.js            # Validaciones
│   │   └── constants.js             # Constantes globales
│   │
│   ├── styles/                      # Estilos globales
│   │   ├── variables.css            # Variables CSS (colores, espaciado)
│   │   ├── reset.css                # Reset CSS
│   │   ├── global.css               # Estilos globales
│   │   ├── typography.css           # Sistema tipográfico
│   │   └── animations.css           # Animaciones reutilizables
│   │
│   ├── App.jsx                      # Componente raíz
│   ├── Router.jsx                   # Configuración de rutas
│   └── main.jsx                     # Entry point
│
├── .gitignore
├── eslint.config.js                 # Configuración ESLint
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── vite.config.js                   # Configuración Vite
├── PLAN_ARQUITECTURA_SEMILLA.md     # Plan arquitectónico detallado
└── README.md                        # Este archivo
```

---

## 🏗️ Arquitectura

### Diagrama de Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVEGADOR                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐  │
│   │   PAGES     │────▶│ COMPONENTS  │────▶│   STYLES    │  │
│   │  (Vistas)   │     │(Reutilizables)    │   (CSS)     │  │
│   └──────┬──────┘     └──────┬──────┘     └─────────────┘  │
│          │                   │                              │
│          ▼                   ▼                              │
│   ┌─────────────────────────────────────┐                  │
│   │         CONTEXT API                 │                  │
│   │  (Auth, Products, Chat, Metrics)    │                  │
│   └──────────────────┬──────────────────┘                  │
│                      │                                      │
│                      ▼                                      │
│   ┌─────────────────────────────────────┐                  │
│   │          SERVICES                   │                  │
│   │  (storage, products, chat, etc.)    │                  │
│   └──────────────────┬──────────────────┘                  │
│                      │                                      │
│          ┌───────────┴───────────┐                         │
│          ▼                       ▼                          │
│   ┌─────────────┐         ┌─────────────┐                  │
│   │ localStorage│         │  IndexedDB  │                  │
│   │  (Sesión)   │         │  (Datos)    │                  │
│   └─────────────┘         └─────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Patrones de Diseño Implementados

- **Component Composition**: Componentes pequeños y reutilizables
- **Container/Presentational**: Separación de lógica y presentación
- **Custom Hooks**: Lógica reutilizable encapsulada
- **Context + Reducer**: Gestión de estado predecible
- **Service Layer**: Abstracción de lógica de datos

---

## 🎨 Diseño UX/UI

### Sistema de Diseño

#### 🎨 Paleta de Colores

Inspirada en el campo colombiano, usando tonos naturales y orgánicos:

```css
/* Verdes Primarios - Campo Colombiano */
--color-primary-900: #1b4332; /* Verde muy oscuro */
--color-primary-700: #40916c; /* Verde bosque */
--color-primary-500: #74c69d; /* Verde claro */
--color-primary-300: #b7e4c7; /* Verde pastel */

/* Tierra - Secundarios */
--color-secondary-600: #8b5a2b; /* Marrón oscuro */
--color-secondary-400: #d4a373; /* Marrón claro */

/* Neutros */
--color-background: #fefae0; /* Crema natural */
--color-surface: #ffffff; /* Blanco */
```

#### 📝 Tipografía

- **Fuente Principal**: Nunito, Outfit (Google Fonts)
- **Tamaño Base**: 18px (optimizado para legibilidad)
- **Escala**: Sistema modular de 14px a 40px

#### 📐 Principios de Diseño

1. **👆 Táctil Primero** - Áreas táctiles mínimo 48x48px
2. **📝 Texto Claro** - Lenguaje coloquial colombiano, sin tecnicismos
3. **🎯 Un Objetivo por Pantalla** - Evitar sobrecarga cognitiva
4. **🔄 Feedback Constante** - Confirmaciones visuales en cada acción
5. **🆘 Ayuda Siempre Visible** - Soporte accesible en todo momento

### Diseño Mobile-First

La aplicación está diseñada primero para móviles, expandiéndose progresivamente:

```
Mobile:  320px - 480px  (Diseño base)
Tablet:  481px - 768px  (Expandir)
Desktop: 769px+         (Optimizar)
```

---

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Completado)

- [x] Landing page con información del proyecto
- [x] Sistema de autenticación simulado
- [x] Dashboard diferenciado por rol (productor/comprador)
- [x] Marketplace con filtros básicos
- [x] Publicación de productos (wizard)
- [x] Sistema de chat simulado
- [x] Centro educativo
- [x] Página de ayuda

### 🚧 Fase 2: Mejoras (En Progreso)

- [ ] Integración con backend real
- [ ] Autenticación con Firebase/Auth0
- [ ] Sistema de notificaciones push
- [ ] Geolocalización real
- [ ] Sistema de valoraciones y reseñas
- [ ] Panel de analytics para productores

### 🔮 Fase 3: Expansión (Futuro)

- [ ] App móvil nativa (React Native)
- [ ] Sistema de pagos integrado
- [ ] Marketplace de servicios agrícolas
- [ ] Comunidad y foros
- [ ] Integración con WhatsApp Business API
- [ ] Soporte multiidioma (incluir lenguas indígenas)

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este proyecto busca mejorar la vida de los campesinos colombianos, y tu ayuda es valiosa.

### Cómo Contribuir

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución

- Sigue los principios de diseño UX establecidos
- Mantén la accesibilidad como prioridad
- Escribe código limpio y documentado
- Asegúrate de que el código pase el linter
- Prueba en dispositivos móviles

### Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y colaborativo.

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

## 📞 Contacto

**Equipo SEMILLA**

- 📧 Email: cassianiyanezyeiner@gmail.com
- 🌐 Website: [www.semilla.com.co](#Proximamente)
- 💼 LinkedIn: [SEMILLA](#Proximamente)

**Repositorio**: [https://github.com/YeinerCassiani/Semilla](https://github.com/YeinerCassiani/Semilla)

---

## 🙏 Agradecimientos

- A todos los campesinos colombianos que inspiraron este proyecto
- A la comunidad de React y Vite por las herramientas increíbles
- A los diseñadores y desarrolladores que contribuyeron con ideas

---

<div align="center">

**Hecho con ❤️ para el campo colombiano**

⭐ Si este proyecto te parece útil, ¡dale una estrella!

[⬆ Volver arriba](#-semilla)

</div>
