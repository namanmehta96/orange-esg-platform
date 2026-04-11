import { useApp } from '../contexts/AppContext';

export default function StatusBar() {
  const { currentCompany, T, locale } = useApp();

  const statusRight = currentCompany
    ? `${T('status.viewing')} ${currentCompany.name} · ${new Date().toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}`
    : T('status.ready');

  return (
    <div className="status-bar">
      <div className="si">
        <span className="sdot" />
        {T('status.live')}
      </div>
      <div className="si">
        <span className="sck">&#10003;</span>
        {T('status.claude')}
      </div>
      <div className="si">
        <span className="sck">&#10003;</span>
        {T('status.mapping')}
      </div>
      <div id="status-right" style={{ marginLeft: 'auto', fontWeight: 400, opacity: 0.9 }}>
        {statusRight}
      </div>
    </div>
  );
}
