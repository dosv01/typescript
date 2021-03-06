import {Spacecraft, ContainerShip} from './base-ships'
import {MillennumFalcon} from './starfighters'

import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MillennumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)
