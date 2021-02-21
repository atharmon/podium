import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from "typeorm";

@Entity()
export class PodiumBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @UpdateDateColumn()
  public updated: Date;

  @CreateDateColumn()
  public created: Date;
}

@Entity()
export class Driver extends PodiumBaseEntity {
  @Column()
  public name: string;

  @Column()
  public carNumber: number;

  @Column()
  public dateOfBirth: Date;

  @Column()
  public countryOfOrigin: string;

  @Column()
  public team: Team;

  @Column()
  public series: Series;

  @Column()
  public twitterUrl: string;
}

@Entity()
export class Race extends PodiumBaseEntity {
  @Column()
  public track: Track;

  @Column()
  public series: Series;

  @Column()
  public raceDate: Date;
}

@Entity()
export class RaceResult extends PodiumBaseEntity {
  @Column()
  public driver: Driver;

  @Column()
  public finished: number;
}

@Entity()
export class Series extends PodiumBaseEntity {
  @Column()
  public name: string;
}

@Entity()
export class Team extends PodiumBaseEntity {
  @Column()
  public name: string;

  @Column()
  public drivers: Driver[];
}

@Entity()
export class Track extends PodiumBaseEntity {
  @Column()
  public name: string;

  @Column()
  public abbreviation: string;

  @Column()
  public location: string;
}
