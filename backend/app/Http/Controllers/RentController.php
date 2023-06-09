<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\Rent;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Get all available cars
        $cars = Car::where('available', true)->get();

        return response()->json($cars);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'car_id' => 'required|integer',
            'rent_date' => 'required|date',
            'return_date' => 'required|date|after:rent_date',
        ]);

        $car = Car::findOrFail($validatedData['car_id']);
        $price = $car->price;

        $rentDate = Carbon::parse($validatedData['rent_date']);
        $returnDate = Carbon::parse($validatedData['return_date']);
        $numberOfDays = $returnDate->diffInDays($rentDate);
        $totalPrice = $numberOfDays * $price;

        $rental = new Rent();
        $rental->rent_date = $validatedData['rent_date'];
        $rental->return_date = $validatedData['return_date'];
        $rental->price = $totalPrice;
        $rental->user_id = $validatedData['user_id'];
        $rental->car_id = $validatedData['car_id'];
        $rental->save();

        $car->available = false;
        $car->save();

        return response()->json(['message' => 'Rental record created successfully.']);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getDataByUserId(Request $request)
    {
        $userId = $request->query('userid');

        $data = DB::table('rent')
            ->join('cars', 'rent.car_id', '=', 'cars.id')
            ->select('rent.*', 'cars.brand', 'cars.model', 'cars.year', 'cars.image')
            ->where('rent.user_id', $userId)
            ->get();

        return response()->json($data);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Car::find($id);
        $car->available = true;
        $car->save();

        return response()->json(['success' => true, 'message' => 'Car availability updated.']);
    }

}
