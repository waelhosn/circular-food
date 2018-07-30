import { Menu } from '././models/Menu.model';

export interface AppState {
  readonly menu: Menu[];
  readonly loading: boolean;
}