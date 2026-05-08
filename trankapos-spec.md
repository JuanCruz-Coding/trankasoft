# TrankaPOS — Spec funcional para diseñar la landing

Documento de referencia para escribir copy y armar secciones de la landing en `trankasoft.com/pos`. Basado en el código real del repo `TrankaPos` (no en aspiracional). Cualquier feature marcada con ⚠️ requiere validación con Juan antes de prometerla públicamente.

---

## 1. Resumen ejecutivo

**TrankaPOS** es un punto de venta web multi-sucursal en la nube para comercios chicos y medianos (kioscos, despensas, almacenes, minimarkets). Permite vender rápido, controlar stock en tiempo real entre sucursales, manejar caja con arqueo automático y analizar ventas con reportes. Funciona en cualquier navegador — notebook, tablet, celular — sin instalación.

**Diferencia clave vs competencia**: software pensado para comercios argentinos (precios en pesos, MP nativo), multi-sucursal desde el día 1 (no como upgrade caro), y sin contrato (mes a mes con cancelación).

---

## 2. Público objetivo

- Kiosqueros con 1 a 3 sucursales que crecieron con cuaderno y planilla.
- Despenseros y almacenes que ya tienen 2+ empleados y necesitan diferenciar permisos.
- Minimarkets que arman su primer sistema y necesitan algo simple pero serio.
- **No es para**: gastronomía con mesas (sin módulo de comandas), e-commerce puro (sin tienda online), grandes cadenas con ERP.

---

## 3. Problema que resuelve

| Pain point | Cómo lo resuelve TrankaPOS |
|---|---|
| "No sé qué se vende y qué no" | Reportes con ranking de productos, categorías, evolución diaria |
| "Cuando se rompe la caja, no sé cuánto faltó" | Arqueo automático con diferencia calculada |
| "Mi encargado puede borrar cosas que no debería" | 3 roles con restricciones automáticas |
| "Tengo dos kioscos y no sé qué tiene cada uno" | Stock por sucursal con vista consolidada |
| "El sistema viejo me cobra una fortuna por sucursal" | Multi-sucursal incluido desde plan Pro |
| "Me piden Excel para todo" | Importación CSV de productos, exportación de reportes |
| "Los chicos venden y no me entero" | Historial filtrable por cajero |

---

## 4. Módulos (qué hace la app)

### 4.1 Punto de venta (POS)
- Búsqueda de productos por nombre con autocomplete.
- Lectura de código de barras con foco automático en el input (sin click previo).
- Atajo de teclado F2 para forzar foco al lector.
- Carrito con cantidad editable, descuentos por línea y descuento global sobre el total.
- Cobros combinados: efectivo + débito + crédito + transferencia + QR en una misma venta.
- Alerta visual si el stock del producto que querés cobrar es insuficiente.
- Impresión de ticket (vía navegador → impresora térmica del SO).

### 4.2 Productos
- Catálogo con: nombre, precio, costo, código de barras, categoría, IVA, activo/inactivo.
- Búsqueda por nombre o código.
- **Importación masiva por CSV** con validación previa: detecta separadores (`,`, `;`, tab), acepta alias en español (`nombre`, `precio_venta`, `iva%`, etc.) y reporta errores línea por línea antes de insertar.
- Activación / desactivación sin perder histórico de ventas pasadas.

### 4.3 Stock por depósito
- Cantidad disponible **independiente por sucursal** (mismo producto, distintos stocks).
- Stock mínimo configurable por producto.
- Alertas visuales: rojo si está en cero o negativo, naranja si está bajo el mínimo.
- Ajustes manuales con motivo (rotura, ajuste, otros) y trazabilidad.
- Vista filtrable por depósito o consolidada.

### 4.4 Transferencias
- Movimiento de mercadería entre sucursales en una sola operación.
- Descuento automático en el depósito origen + alta en destino.
- Campo de notas para contexto.
- Solo accesible para Dueño y Encargado.
- Disponible desde el plan Pro.

### 4.5 Caja
- Apertura de turno con monto inicial declarado.
- Ingresos / egresos intra-turno con motivo (pago a proveedor, retiro, etc.).
- Cierre con **arqueo automático**: suma apertura + ventas en efectivo + movimientos, calcula la diferencia con lo declarado.
- Solo una caja abierta por depósito a la vez.
- Historial de cierres con su diferencia.

### 4.6 Ventas (historial)
- Listado filtrable por fecha, depósito, cajero.
- Detalle de cada ticket: items, descuentos aplicados, medios de pago usados.
- Reimpresión del ticket original.
- **Anulación con reverso automático de stock** (vuelve al depósito de origen).
- Estado visible: válida / anulada.

### 4.7 Reportes
- Rango: hoy / 7 días / 30 días / mes en curso.
- Métricas: total facturado, cantidad de tickets, ticket promedio.
- Gráfico de evolución diaria de ventas.
- Distribución por medio de pago (efectivo, débito, crédito, transferencia, QR).
- Ranking de cajeros y de productos más vendidos.
- Filtros por categoría y por estado (activas / anuladas / todas).
- Exportación CSV ⚠️ (verificar — el agente lo lista, brief no es explícito).

### 4.8 Dashboard
- KPIs del día: ventas totales, tickets, ticket promedio, productos en stock crítico.
- Gráfico de barras de últimos 14 días.
- Top 5 productos de la semana.
- Tabla de productos con stock bajo el mínimo.

### 4.9 Depósitos / Sucursales
- Alta y edición: nombre, dirección.
- Activación / desactivación sin borrar histórico.
- Cada sucursal maneja su stock y su caja por separado, mismo catálogo de productos.

### 4.10 Usuarios y roles
- Crear / editar usuario con email, nombre, rol y depósito asignado opcional.
- Reset de contraseña desde la administración.

### 4.11 Suscripción / Plan
- Vista del plan actual con uso vs. límite (sucursales, usuarios, productos).
- Cambio de plan con redirección a Mercado Pago.
- Cancelación con un click (cancela el preapproval automáticamente).
- Banner si la suscripción está `past_due`.

### 4.12 Ayuda integrada ⚠️
- Manual dentro de la app con buscador y FAQ por módulo (verificar si ya está implementado o es del brief antiguo).

---

## 5. Roles y permisos

| Sección | Owner (Dueño) | Manager (Encargado) | Cashier (Cajero) |
|---|:---:|:---:|:---:|
| POS / Vender | ✅ | ✅ | ✅ |
| Caja | ✅ | ✅ | ✅ |
| Productos | ✅ | ✅ | ver |
| Stock | ✅ | ✅ | ver |
| Ventas (historial) | ✅ | ✅ | propias |
| Transferencias | ✅ | ✅ | ❌ |
| Reportes | ✅ | ✅ | ❌ |
| Depósitos | ✅ | ✅ | ❌ |
| Usuarios | ✅ | parcial | ❌ |
| Plan / billing | ✅ | ❌ | ❌ |

El menú lateral se adapta solo al rol — un cajero no ve siquiera la opción de Reportes.

---

## 6. Planes y precios

| Plan | Code | Precio mensual | Sucursales | Usuarios | Productos | Features |
|---|---|---|:---:|:---:|:---:|---|
| **Free Trial** | `free` | $0 (14 días) | 1 | 2 | 100 | Todo lo de Pro durante el trial |
| **Básico** | `basic` | $40.000 | 1 | 2 | ilimitado | Sin transferencias, sin reportes avanzados |
| **Pro** ⭐ | `pro` | $100.000 | 3 | 10 | ilimitado | + Transferencias, reportes avanzados, CSV export |
| **Empresa** | `business` | $240.000 | ilimitado | ilimitado | ilimitado | + API |

Los precios son en pesos argentinos. IVA incluido. Pago mensual con Mercado Pago. Sin contrato.

**Posicionamiento**: Pro es el "sweet spot" (multiplicador 2.5x sobre Básico, 6x sobre nada en empresa). El precio total está pensado 20-30% por debajo de Posberry (competencia directa).

---

## 7. Integraciones externas

- **Mercado Pago Suscripciones** — billing recurrente del SaaS. Cobro automático mensual, cancelación, banner de pago vencido.
- **Resend** — emails transaccionales: bienvenida al signup, activación tras pago, aviso de pago vencido. (Está en producción, no es roadmap.)
- **Supabase** — backend multi-tenant, autenticación, RLS para aislar datos entre comercios, triggers SQL que enforce-an los límites de plan.
- **Vercel** — hosting con deploy automático.

**No tiene** (aclarar para no prometer):
- AFIP / facturación electrónica (en roadmap, no implementado).
- Integración con balanzas, cajón de dinero, lectoras de tarjeta físicas.
- E-commerce / catálogo público.
- Comandas / módulo de gastronomía.
- App nativa (es PWA installable, no app de Play Store).

---

## 8. Detalles de UX que vale la pena resaltar

- **Foco automático en el lector de barras**: scanner activo apenas entrás al POS, sin clicks.
- **F2** vuelve a poner foco en el input del lector. **F4** abre modal de pago si hay items.
- **Multi-tenant aislado**: cada comercio ve solo sus datos (RLS de Supabase).
- **Responsive real**: probado en notebook, tablet y celular.
- **PWA installable**: se puede agregar a la pantalla de inicio en Android/iOS para que parezca app.
- **Datos en la nube**: nada se guarda en el dispositivo del cliente, los datos están en Supabase con backups automáticos.
- **Cancelación en un click**: nada de "llamar a soporte para darse de baja".

---

## 9. Hardware compatible

- ✅ **Lectores de código de barras Bluetooth o USB**: cualquiera que se comporte como teclado (la mayoría). No requiere driver.
- ✅ **Impresoras térmicas (ESC/POS)** que tu sistema operativo reconozca como impresora normal — el ticket se imprime vía navegador.
- ✅ **Cualquier dispositivo con navegador moderno**: Chrome, Edge, Safari, Firefox.
- ❌ Balanzas, cajón de dinero, lectoras de tarjeta físicas (en roadmap).

---

## 10. Lo que NO tiene aún (para no prometer)

| Feature | Estado |
|---|---|
| Facturación electrónica AFIP | Roadmap, no implementado |
| Venta offline con sync | Roadmap |
| Integración hardware (balanza, cajón, posnet físico) | Roadmap |
| App nativa (Play Store / App Store) | No planeado — es PWA |
| Catálogo público / e-commerce | No planeado |
| Módulo de comandas / mesas | No es su scope |
| API pública | Solo en plan Empresa, ⚠️ verificar si está expuesta |

---

## 11. Sugerencia de secciones para la landing `/pos`

(Este `.md` es solo input — la composición final la decidimos después. Lo que sigue es una propuesta inicial.)

1. **Hero** — propuesta de valor + CTA "Probar gratis 14 días"
2. **Para quién es** (3 cards: kiosqueros / despensas / minimarkets)
3. **Problema → solución** (la tabla de pain points puede inspirar copy)
4. **Módulos principales** (6 cards: POS, Stock, Caja, Reportes, Transferencias, Roles)
5. **Cómo se ve** — screenshots o mockup del POS y del Dashboard
6. **Multi-sucursal en serio** — sección dedicada con explicación visual (es el diferencial fuerte vs competencia barata)
7. **Hardware** — qué necesitás para arrancar (te llevás un kit de 2 cosas)
8. **Planes** — los 4 con tabla comparativa, Pro destacado
9. **FAQ** — preguntas frecuentes (instalación, soporte, datos, AFIP, etc.)
10. **CTA final** — "Probalo gratis"

---

## 12. Preguntas pendientes para Juan

Antes de escribir copy definitivo, confirmar:

- [ ] ¿La exportación CSV de reportes ya está implementada o es solo de productos?
- [ ] ¿La ayuda integrada (`/help`) está activa o se pospuso?
- [ ] ¿El módulo de comandas / gastronomía está fuera del scope o en evaluación?
- [ ] ¿Querés mostrar algún screenshot o mockup en la landing? Si sí, ¿tomamos del POS de prod o armamos uno?
- [ ] ¿Tenés testimonios o números (clientes activos, tickets procesados) para usar de prueba social?
- [ ] ¿Hay un email de soporte distinto a `contacto@trankasoft.com`?
- [ ] ¿Cuál es el nombre comercial preferido — "TrankaPOS" o "Tranka POS"? (el código usa el primero)
