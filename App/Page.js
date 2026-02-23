export default function Home() {
  return (
    <main style={{padding:20,fontFamily:"Arial"}}>
      <h1>T.J.Restyle</h1>
      <h2>PDR Afspraak Aanvragen</h2>

      <form>
        <input placeholder="Naam" /><br/><br/>
        <input placeholder="Telefoon" /><br/><br/>
        <input type="date" /><br/><br/>
        <input type="time" /><br/><br/>
        <button>Aanvraag versturen</button>
      </form>

      <p>Na aanvraag ontvangt u bevestiging na goedkeuring.</p>
    </main>
  )
  }
