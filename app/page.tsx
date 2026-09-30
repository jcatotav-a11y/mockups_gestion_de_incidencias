"use client";

import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bell,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  CloudUpload,
  FileText,
  HardDrive,
  Home,
  Laptop,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  MapPin,
  Menu,
  MoreHorizontal,
  Network,
  Paperclip,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  UserRound,
  Users,
  Wifi,
  XCircle,
} from "lucide-react";

type View = "monitoring" | "incident" | "permissions";

const navItems = [
  { label: "Monitoreo", icon: LayoutDashboard },
  { label: "Incidencias", icon: LifeBuoy },
  { label: "Equipos", icon: Laptop },
  { label: "Reportes", icon: FileText },
  { label: "Permisos", icon: ShieldCheck },
  { label: "Configuración", icon: Settings },
];

function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "success" | "warning" | "danger" | "info" | "neutral";
}) {
  return (
    <span className={`status-badge status-${tone}`}>
      <span className="status-dot" />
      {children}
    </span>
  );
}

function Sidebar({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (label: string) => void;
}) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <Activity />
        </div>
        <div>
          <strong>Sistema TIC</strong>
          <span>Service Desk</span>
        </div>
      </div>
      <div className="workspace-label">GESTIÓN INTERNA</div>
      <nav className="nav-list" aria-label="Navegación principal">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`nav-item ${active === label ? "active" : ""}`}
            onClick={() => onNavigate(label)}
          >
            <Icon /> <span>{label}</span>
            {active === label && <ChevronRight className="nav-arrow" />}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <div className="avatar avatar-small">JC</div>
          <div>
            <strong>Jhonatan Catota</strong>
            <span>Service Desk</span>
          </div>
          <MoreHorizontal />
        </div>
      </div>
    </aside>
  );
}

function WebTopbar({ title }: { title: string }) {
  return (
    <header className="topbar">
      <div className="mobile-title">
        <Menu />
      </div>
      <div className="breadcrumb">
        <span>Workspace</span>
        <ChevronRight />
        <strong>{title}</strong>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search />
          <input aria-label="Buscar" placeholder="Buscar en el sistema..." />
        </label>
        <button className="icon-button" aria-label="Notificaciones">
          <Bell />
          <span className="notification-dot" />
        </button>
        <div className="topbar-profile">
          <div className="avatar">JC</div>
          <div>
            <strong>Jhonatan Catota</strong>
            <span>Administrador</span>
          </div>
          <ChevronRight />
        </div>
      </div>
    </header>
  );
}

function WebShell({
  active,
  children,
  title,
  onNavigate,
}: {
  active: string;
  children: React.ReactNode;
  title: string;
  onNavigate: (label: string) => void;
}) {
  return (
    <div className="web-shell">
      <Sidebar active={active} onNavigate={onNavigate} />
      <div className="web-content">
        <WebTopbar title={title} />
        {children}
      </div>
    </div>
  );
}

function MonitoringView({
  onNavigate,
}: {
  onNavigate: (label: string) => void;
}) {
  const incidents = [
    [
      "#INC-2481",
      "PC-Recepción-02",
      "Sede Norte",
      "Conectividad",
      "Abierta",
      "08:42",
      "danger",
    ],
    [
      "#INC-2478",
      "POS-Caja-04",
      "Sede Centro",
      "Hardware",
      "En proceso",
      "08:16",
      "warning",
    ],
    [
      "#INC-2475",
      "AP-Oficina-12",
      "Sede Sur",
      "Red inalámbrica",
      "Abierta",
      "07:58",
      "danger",
    ],
    [
      "#INC-2469",
      "LAP-Contabilidad-06",
      "Sede Norte",
      "Software",
      "Resuelta",
      "07:34",
      "success",
    ],
  ] as const;
  return (
    <WebShell
      active="Monitoreo"
      title="Consola de Monitoreo"
      onNavigate={onNavigate}
    >
      <main className="page-area">
        <div className="page-heading">
          <div>
            <h1>Consola de Monitoreo</h1>
          </div>
          <button className="button button-primary">
            <CloudUpload />
            Exportar reporte
          </button>
        </div>
        <section className="kpi-grid" aria-label="Indicadores principales">
          <div className="kpi-card">
            <div className="kpi-top">
              <span>Equipos en línea</span>
              <div className="kpi-icon icon-blue">
                <Wifi />
              </div>
            </div>
            <div className="kpi-value">
              186 <small>de 194</small>
            </div>
            <div className="kpi-trend trend-up">
              <span>↑ 3.2%</span>
              <em>vs. ayer</em>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-top">
              <span>Equipos fuera de línea</span>
              <div className="kpi-icon icon-gray">
                <Wifi />
              </div>
            </div>
            <div className="kpi-value">08</div>
            <div className="kpi-trend trend-neutral">
              <span>→ 0.0%</span>
              <em>vs. ayer</em>
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-top">
              <span>Incidencias abiertas</span>
              <div className="kpi-icon icon-amber">
                <AlertTriangle />
              </div>
            </div>
            <div className="kpi-value">24</div>
            <div className="kpi-trend trend-up">
              <span>↑ 8.6%</span>
              <em>vs. ayer</em>
            </div>
          </div>
          <div className="kpi-card kpi-critical">
            <div className="kpi-top">
              <span>Incidencias críticas</span>
              <div className="kpi-icon icon-red">
                <AlertTriangle />
              </div>
            </div>
            <div className="kpi-value">03</div>
            <div className="kpi-trend trend-down">
              <span>↓ 12.5%</span>
              <em>vs. ayer</em>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <section className="panel incidents-panel">
            <div className="panel-header">
              <div>
                <h2>Estado por sedes</h2>
              </div>
              <button className="text-button">
                Ver detalle <ChevronRight />
              </button>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Sede</th>
                    <th>Equipos</th>
                    <th>En línea</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="table-primary">
                        <Building2 />
                        Sede Norte
                      </div>
                      <small>Av. El Dorado 68-12</small>
                    </td>
                    <td>86</td>
                    <td>
                      <strong>84</strong> <span className="muted">/ 86</span>
                    </td>
                    <td>
                      <StatusBadge tone="success">Operativo</StatusBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-primary">
                        <Building2 />
                        Sede Centro
                      </div>
                      <small>Carrera 7 # 72-41</small>
                    </td>
                    <td>64</td>
                    <td>
                      <strong>60</strong> <span className="muted">/ 64</span>
                    </td>
                    <td>
                      <StatusBadge tone="warning">Con alerta</StatusBadge>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-primary">
                        <Building2 />
                        Sede Sur
                      </div>
                      <small>Calle 18 # 25-09</small>
                    </td>
                    <td>44</td>
                    <td>
                      <strong>42</strong> <span className="muted">/ 44</span>
                    </td>
                    <td>
                      <StatusBadge tone="danger">Crítico</StatusBadge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <section className="panel incidents-panel">
          <div className="panel-header">
            <div>
              <h2>Últimas incidencias</h2>
              <p>Actualizado hace menos de 1 minuto</p>
            </div>
            <button className="button button-secondary">
              Ver todas las incidencias <ChevronRight />
            </button>
          </div>
          <div className="table-wrap">
            <table className="incidents-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Equipo / estación</th>
                  <th>Sede</th>
                  <th>Tipo</th>
                  <th>Estado</th>
                  <th>Hora</th>
                  <th aria-label="Acciones" />
                </tr>
              </thead>
              <tbody>
                {incidents.map(
                  ([id, equipo, sede, tipo, estado, hora, tone]) => (
                    <tr key={id}>
                      <td>
                        <strong className="id-text">{id}</strong>
                      </td>
                      <td>
                        <div className="table-primary">
                          <HardDrive />
                          {equipo}
                        </div>
                      </td>
                      <td>{sede}</td>
                      <td>{tipo}</td>
                      <td>
                        <StatusBadge
                          tone={
                            tone === "danger"
                              ? "danger"
                              : tone === "warning"
                                ? "warning"
                                : "success"
                          }
                        >
                          {estado}
                        </StatusBadge>
                      </td>
                      <td className="muted">{hora}</td>
                      <td>
                        <button
                          className="table-more"
                          aria-label={`Acciones de ${id}`}
                        >
                          <MoreHorizontal />
                        </button>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </WebShell>
  );
}

function IncidentView({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const steps = ["En camino", "Diagnóstico", "Reparación", "Resuelto"];
  return (
    <div className="mobile-stage">
      <div className="phone-frame">
        <header className="mobile-header">
          <button className="mobile-back" onClick={onBack} aria-label="Volver">
            <ArrowLeft />
          </button>
          <div>
            <strong>Mi incidencia</strong>
          </div>
          <button className="mobile-more" aria-label="Más opciones">
            <MoreHorizontal />
          </button>
        </header>
        <main className="mobile-main">
          <h1>Falla de conectividad</h1>
          <section className="mobile-info-card">
            <div className="mobile-info-line">
              <div className="info-icon">
                <HardDrive />
              </div>
              <div>
                <span>Equipo / estación</span>
                <strong>PC-Recepción-02</strong>
              </div>
            </div>
            <div className="mobile-info-grid">
              <div>
                <MapPin />
                <span>Sede Norte</span>
              </div>
              <div>
                <Clock3 />
                <span>08:42 a. m.</span>
              </div>
            </div>
          </section>
          <section className="mobile-section">
            <div className="section-title-row">
              <h2>Estado actual</h2>
              <StatusBadge tone={step === 4 ? "success" : "info"}>
                {steps[step - 1]}
              </StatusBadge>
            </div>
            <div className="progress-line">
              {steps.map((item, index) => (
                <div
                  key={item}
                  className={`progress-step ${index + 1 <= step ? "complete" : ""} ${index + 1 === step ? "current" : ""}`}
                >
                  <div className="progress-dot">
                    {index + 1 < step ? <Check /> : index + 1}
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="mobile-section change-section">
            <h2>Cambiar estado</h2>
            <div className="state-buttons">
              {steps.map((item, index) => (
                <button
                  key={item}
                  disabled={index + 1 !== step + 1}
                  className={`state-button ${index + 1 === step + 1 ? "next" : ""} ${index + 1 < step + 1 ? "past" : ""}`}
                  onClick={() => setStep(index + 1)}
                >
                  <span className="state-number">
                    {index + 1 < step + 1 ? <Check /> : index + 1}
                  </span>
                  <span>{item}</span>
                  {index + 1 === step + 1 && <ChevronRight />}
                </button>
              ))}
            </div>
          </section>
          <section className="mobile-section">
            <label className="field-label" htmlFor="comments">
              Comentarios
            </label>
            <textarea
              id="comments"
              placeholder="Detalle del trabajo realizado o novedad encontrada..."
            />
            <button className="evidence-button">
              <Paperclip />
              Adjuntar evidencia fotográfica <span>Opcional</span>
            </button>
          </section>
          <button className="mobile-primary">
            Registrar cambio <ChevronRight />
          </button>
        </main>
        <nav className="mobile-nav">
          <button>
            <Home />
            <span>Inicio</span>
          </button>
          <button className="active">
            <LifeBuoy />
            <span>Incidencias</span>
          </button>
          <button>
            <Clock3 />
            <span>Historial</span>
          </button>
          <button>
            <UserRound />
            <span>Perfil</span>
          </button>
        </nav>
      </div>
      <div className="mobile-caption">
        <span>HU3 / RF-005</span>
        <strong>Vista optimizada para técnico en campo</strong>
      </div>
    </div>
  );
}

function PermissionsView({
  onNavigate,
}: {
  onNavigate: (label: string) => void;
}) {
  return (
    <WebShell
      active="Permisos"
      title="Solicitud de Permiso de Acceso"
      onNavigate={onNavigate}
    >
      <main className="page-area permissions-page">
        <div className="page-heading">
          <div>
            <h1>Solicitud de Permiso de Acceso</h1>
          </div>
          <button className="button button-secondary">
            <FileText />
            Exportar historial
          </button>
        </div>
        <div className="permission-layout">
          <section className="panel request-card">
            <div className="request-header">
              <div className="request-identity">
                <div className="avatar avatar-large">JP</div>
                <div>
                  <span className="request-id">Solicitud #PER-0098</span>
                  <h2>Juan Pablo Rojas</h2>
                  <p>Analista de infraestructura · TechSupport S.A.S.</p>
                </div>
              </div>
              <StatusBadge tone="warning">Pendiente</StatusBadge>
            </div>
            <div className="request-sections">
              <div className="request-section">
                <h3>
                  <Users />
                  Datos del solicitante
                </h3>
                <div className="details-grid">
                  <div>
                    <span>Nombre</span>
                    <strong>Juan Pablo Rojas</strong>
                  </div>
                  <div>
                    <span>Cargo</span>
                    <strong>Analista de infraestructura</strong>
                  </div>
                  <div>
                    <span>Empresa</span>
                    <strong>TechSupport S.A.S.</strong>
                  </div>
                  <div>
                    <span>Identificación</span>
                    <strong>CC 1.024.587.321</strong>
                  </div>
                </div>
              </div>
              <div className="request-section">
                <h3>
                  <MapPin />
                  Datos del acceso
                </h3>
                <div className="details-grid">
                  <div>
                    <span>Sitio / sede</span>
                    <strong>Sede Norte · Sala de servidores</strong>
                  </div>
                  <div>
                    <span>Fecha</span>
                    <strong>24 de septiembre de 2024</strong>
                  </div>
                  <div>
                    <span>Hora de inicio</span>
                    <strong>10:00 a. m.</strong>
                  </div>
                  <div>
                    <span>Hora de finalización</span>
                    <strong>12:30 p. m.</strong>
                  </div>
                  <div className="full-detail">
                    <span>Motivo del acceso</span>
                    <strong>
                      Mantenimiento preventivo de equipos de red y revisión de
                      cableado.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="request-section">
                <h3>
                  <Paperclip />
                  Documentación
                </h3>
                <div className="files-row">
                  <div className="file-item">
                    <div className="file-icon">
                      <FileText />
                    </div>
                    <div>
                      <strong>orden_de_trabajo_0098.pdf</strong>
                      <span>PDF · 248 KB</span>
                    </div>
                    <CheckCircle2 />
                  </div>
                  <button className="text-button">
                    Ver archivos <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="request-actions">
              <button className="button button-success">
                <Check />
                Aprobar solicitud
              </button>
              <button className="button button-danger-outline">
                <XCircle />
                Rechazar
              </button>
              <button className="button button-ghost">Cancelar</button>
            </div>
          </section>
          <aside className="panel approval-card">
            <div className="panel-header">
              <div>
                <h2>Estado de solicitud</h2>
                <p>Seguimiento del proceso</p>
              </div>
              <ShieldCheck className="approval-icon" />
            </div>
            <div className="approval-timeline">
              <div className="timeline-item completed">
                <div className="timeline-marker">
                  <Check />
                </div>
                <div>
                  <strong>Solicitud creada</strong>
                  <span>24 sep · 08:32 a. m.</span>
                </div>
              </div>
              <div className="timeline-item current">
                <div className="timeline-marker">2</div>
                <div>
                  <strong>En revisión</strong>
                  <span>Esperando aprobación del responsable</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">3</div>
                <div>
                  <strong>Acceso autorizado</strong>
                  <span>Pendiente</span>
                </div>
              </div>
            </div>
            <div className="approver-box">
              <span>Responsable asignado</span>
              <div>
                <div className="avatar avatar-small">JC</div>
                <strong>Jhonatan Catota</strong>
              </div>
            </div>
          </aside>
        </div>
        <section className="panel history-panel">
          <div className="panel-header">
            <div>
              <h2>Historial de permisos</h2>
            </div>
            <label className="compact-search">
              <Search />
              <input placeholder="Buscar usuario o sede" />
            </label>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Usuario</th>
                  <th>Sitio</th>
                  <th>Estado</th>
                  <th aria-label="Acciones" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24 sep 2024</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar avatar-tiny">JP</div>
                      <strong>Juan Pablo Rojas</strong>
                    </div>
                  </td>
                  <td>Sede Norte</td>
                  <td>
                    <StatusBadge tone="warning">Pendiente</StatusBadge>
                  </td>
                  <td>
                    <button className="table-more">
                      <MoreHorizontal />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>20 sep 2024</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar avatar-tiny avatar-purple">LM</div>
                      <strong>Laura Martínez</strong>
                    </div>
                  </td>
                  <td>Sede Centro</td>
                  <td>
                    <StatusBadge tone="success">Aprobado</StatusBadge>
                  </td>
                  <td>
                    <button className="table-more">
                      <MoreHorizontal />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>18 sep 2024</td>
                  <td>
                    <div className="user-cell">
                      <div className="avatar avatar-tiny avatar-orange">DS</div>
                      <strong>Diego Salazar</strong>
                    </div>
                  </td>
                  <td>Sede Sur</td>
                  <td>
                    <StatusBadge tone="danger">Rechazado</StatusBadge>
                  </td>
                  <td>
                    <button className="table-more">
                      <MoreHorizontal />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </WebShell>
  );
}

export default function Page() {
  const [view, setView] = useState<View>("monitoring");
  const onNavigate = (label: string) => {
    if (label === "Monitoreo") setView("monitoring");
    if (label === "Permisos") setView("permissions");
  };
  return (
    <div className="app-shell">
      <div className="mockup-switcher">
        <div className="switcher-tabs">
          <button
            className={view === "monitoring" ? "selected" : ""}
            onClick={() => setView("monitoring")}
          >
            <LayoutDashboard />
            Consola de monitoreo
          </button>
          <button
            className={view === "incident" ? "selected" : ""}
            onClick={() => setView("incident")}
          >
            <Smartphone />
            Actualización móvil
          </button>
        </div>
      </div>
      {view === "monitoring" && <MonitoringView onNavigate={onNavigate} />}
      {view === "incident" && (
        <IncidentView onBack={() => setView("monitoring")} />
      )}
      {view === "permissions" && <PermissionsView onNavigate={onNavigate} />}
    </div>
  );
}
