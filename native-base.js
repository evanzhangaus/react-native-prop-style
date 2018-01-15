import * as nativeBaseComponents from 'native-base'
import { packComponentsPropStyle } from './index'

const cs = packComponentsPropStyle(nativeBaseComponents,{});
module.exports = {
    ...cs
}