export interface RobotStructure {
  name: string;
  image: string;
  stats: {
    speed: number;
    endurance: number;
    creationDate: Date;
  };
}
