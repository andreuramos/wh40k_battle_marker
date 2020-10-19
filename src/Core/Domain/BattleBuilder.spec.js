import BattleBuilder from "./BattleBuilder";
import Mission from "./Mission";
import Objective from "./Objective";
import Battle from "./Battle";

describe('BattleBuilder From form', () => {

    const objective = new Objective("TestMain","test-main", "desc", "main", "main")
    const secondary = new Objective("TestSecondary", "test-sec", "desc", "secondary", "main")
    const mission = new Mission("Test", "test test", objective, secondary, "test", "any")
    const secondary_objectives = [
        new Objective("Secondary1", "sec1", "desc", "secondary", "cat1"),
        new Objective("Secondary2", "sec2", "desc", "secondary", "cat2"),
        new Objective("Secondary3", "sec3", "desc", "secondary", "cat3")
    ]
    const form_data = {
        player1: "Andreu",
        player2: "Pedro",
        startingPlayer: "Andreu",
        mission: mission,
        player1_objectives: secondary_objectives,
        player2_objectives: secondary_objectives
    }

    it('creates the battle with the player\'s names', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().name()).toBe("Andreu")
        expect(battle.player2().name()).toBe("Pedro")
    })

    it('sets starting player as player 1', () => {
        let data = { ...form_data}
        data.startingPlayer = "Pedro"

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().name()).toBe("Pedro")
        expect(battle.player2().name()).toBe("Andreu")
    })

    it('attaches main mission to players', () => {
        const battle = BattleBuilder.fromForm(form_data)

        expect(battle.player1().objectives()[0]).toBe(objective)
        expect(battle.player2().objectives()[0]).toBe(objective)
    })

    it('sets empty secondary objectives', () => {
        let data = { ...form_data}
        data.player1_objectives = []
        data.player2_objectives = []

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().objectives().length).toBe(1)
        expect(battle.player2().objectives().length).toBe(1)
    })

    it('sets non empty secondary objectives', () => {
        const battle1 = BattleBuilder.fromForm(form_data)

        expect(battle1.player1().objectives().length).toBe(4)
        expect(battle1.player2().objectives().length).toBe(4)
    })

    it('assigns correctly the objectives to the players', () => {
        const data = { ...form_data }
        data.player2_objectives = [
            new Objective('Do Something', 'do_something', "bla", 'secondary', 'cat1'),
            new Objective('Do Something else', 'do_something_else', "bla", 'secondary', 'cat2')
        ]

        const battle = BattleBuilder.fromForm(data)

        expect(battle.player1().objectives()[0].key()).toBe("test-main")
        expect(battle.player1().objectives()[1].key()).toBe("sec1")
        expect(battle.player1().objectives()[2].key()).toBe("sec2")
        expect(battle.player1().objectives()[3].key()).toBe("sec3")
        expect(battle.player2().objectives()[0].key()).toBe('test-main')
        expect(battle.player2().objectives()[1].key()).toBe('do_something')
        expect(battle.player2().objectives()[2].key()).toBe('do_something_else')
    })

    it('does not set null objectives', () => {
        let data = { ...form_data }
        data.player1_objectives = [
            new Objective("Only", "one", "objective", "secondary", "cat"),
            null,
            null
        ]

        const battle1 = BattleBuilder.fromForm(data)

        expect(battle1.player1().objectives().length).toBe(2)
    })
})

const JSON_DATA = '{"_startedAt":"2020-10-19T08:57:07.097Z","_endedAt":null,"_isOver":false,"_player1":{"_name":"Pedro","_score":4,"_completedMissions":[{"_name":"Desgaste","_points":4,"_round":1,"_createdAt":"2020-10-19T08:57:55.380Z"}],"_commandPoints":4,"_objectives":[{"_name":"Ocupar y Mantener","_key":"occupy_and_maintain","_description":"Al final de la fase de mando de cada jugador, según los marcadores que controla:<br><ul><li>5 puntos por controlar un marcador o más</li><li>5 puntos por controlar dos o más marcadores</li><li>5 puntos por controlas más marcadores que el oponente</li></ul>","_type":"main","_category":"main"},{"_name":"Desgaste","_key":"attrition","_description":"Al final de la ronda obtienes 4 puntos si han sido eliminadas más unidades enemigas que amigas","_type":"secondary","_category":"Sin descanso, sin Respiro"},{"_name":"Abatir Blanco Grande","_key":"beat_big_target","_description":"Al final de la partida obtienes 2 puntos de victoria por cada criatura MONSTRUO o VEHICULO enemiga con 10 o menos heridas que sea eliminada y 3 por cada criatura MONSTRUO o VEHICULO con 11 o más heridas","_type":"secondary","_category":"Purgar al Enemigo"},{"_name":"Alzar bien alto los Estandartes","_key":"rise_the_banner_high","_description":"Una o más unidades de INFANTERIA pueden empezarla al final de la fase de movimiento, si está dentro del alcance de un marcador de objetivo que no tenga ya uno de tus estandartes alzado y no hay unidades enemigas (excepto AERONAVE) en el mismo marcador. La acción se completa al final del turno. El estandarte es retirado si el enemigo controla ese objetivo. Al final de cada fase de mando obtienes 1 punto de victoria por cada estandarte alzado. Al final de la batalla obtienes 1 puto de victoria por cada estandarte alzado.","_type":"secondary","_category":"Operaciones en la Sombra"}]},"_player2":{"_name":"Andreu","_score":12,"_completedMissions":[{"_name":"Ocupar y Mantener","_points":12,"_round":1,"_createdAt":"2020-10-19T08:57:43.407Z"}],"_commandPoints":0,"_objectives":[{"_name":"Ocupar y Mantener","_key":"occupy_and_maintain","_description":"Al final de la fase de mando de cada jugador, según los marcadores que controla:<br><ul><li>5 puntos por controlar un marcador o más</li><li>5 puntos por controlar dos o más marcadores</li><li>5 puntos por controlas más marcadores que el oponente</li></ul>","_type":"main","_category":"main"},{"_name":"Ataque Quirúrgico","_key":"surgical_attack","_description":"Al final del turno, puntúa al controlar el marcador de la zona de despliegue del oponente","_type":"secondary","_category":"Secundaria Sugerida"},{"_name":"Luchar en todos los frentes","_key":"fight_all_fronts","_description":"2 puntos de victoria al final del turno si tienes una o más unidades dentro de tres cuartos distintos del tablero y a más de 6\\" del centro. Si ocupas los 4 cuartos obtienes 3","_type":"secondary","_category":"Supremacía en el campo de batalla"},{"_name":"Negar la Bruja","_key":"abhor_the_witch","_description":"No puedes seleccionar este objetivo si tienes alguna unidad PSIQUICO. 5 punots al final de la batalla por cada PERSONAJE PSIQUICO eliminado y 3 por cada otra unidad PSIQUICO eliminada","_type":"secondary","_category":"Tejer la Disformidad"}]},"_activePlayer":1,"_round":1}'

describe('BatlleBuilder from json', () => {
    it('returns a battle', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle instanceof Battle).toBe(true)
    })

    it('sets players name', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.player1().name()).toBe("Pedro")
        expect(battle.player2().name()).toBe("Andreu")
    })

    it('sets objectives', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.player1().objectives()[0].key()).toBe('occupy_and_maintain')
        expect(battle.player1().objectives()[1].key()).toBe('attrition')
        expect(battle.player1().objectives()[2].key()).toBe('beat_big_target')
        expect(battle.player1().objectives()[3].key()).toBe('rise_the_banner_high')
        expect(battle.player2().objectives()[0].key()).toBe('occupy_and_maintain')
        expect(battle.player2().objectives()[1].key()).toBe('surgical_attack')
        expect(battle.player2().objectives()[2].key()).toBe('fight_all_fronts')
        expect(battle.player2().objectives()[3].key()).toBe('abhor_the_witch')
    })

    it('sets player\'s score', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.player1().score()).toBe(4)
        expect(battle.player2().score()).toBe(12)
    })

    it('sets player\'s command poinst', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.player1().commandPoints()).toBe(4)
        expect(battle.player2().commandPoints()).toBe(0)
    })

    it('sets player\'s completed missions', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        const completed = battle.player1().completedMissions()
        expect(completed.length).toBe(1)
        expect(completed[0].name()).toBe("Desgaste")
        expect(completed[0].points()).toBe(4)
        expect(completed[0].round()).toBe(1)
        expect(completed[0].createdAt()).toBe("2020-10-19T08:57:55.380Z")
    })

    it('sets round', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.round()).toBe(1)
    })

    it('sets active player', () => {
        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.activePlayer()).toBe(1)
    })

    it('sets started at', () => {
        const startAt = new Date("2020-10-19T08:57:07.097Z")

        const battle = BattleBuilder.fromJson(JSON_DATA)

        expect(battle.startedAt().toString()).toBe(startAt.toString())
    })
})