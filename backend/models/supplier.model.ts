import { Table, Column, Model } from 'sequelize-typescript'

@Table
export class Supplier extends Model {
  
  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  address: string

  @Column
  city: string;

  @Column
  state: string

  @Column
  country: string;

  @Column
  zip: string;

  @Column
  logoFileName: string;
  
}