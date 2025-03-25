type Seat = {
  id: number;
  seatNumber: string;
};

export const seatsAvailable: Seat[] = [
  { id: 1, seatNumber: "A1" },
  { id: 2, seatNumber: "A2" },
  { id: 3, seatNumber: "B1" },
  { id: 4, seatNumber: "B2" },
  { id: 5, seatNumber: "C1" },
];

const getSeatById = (id: number) => {
  const seat = seatsAvailable.find((seat) => seat.id === id);
  if (!seat) throw new Error("Seat not found");
  return seat;
};

const reserveSeat = (seatId: number): void => {
  const index = seatsAvailable.findIndex((seat) => seat.id === seatId);
  if (index === -1) throw new Error("Seat already reserved or doesn't exist");
  seatsAvailable.splice(index, 1);
};

export const bookFlight = (id: number): string => {
  let seat = null;
  try {
    seat = getSeatById(id);
  } catch (error) {
    throw new Error((error as Error).message);
  }
  reserveSeat(seat.id);
  return `Seat ${seat.seatNumber} reserved successfully`;
};
