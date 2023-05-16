<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\carrier;
use Illuminate\Support\Facades\Http;


class CarrierControllerler extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $carriers = Carrier::all();
        return response()->json($carriers);
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

    private function extractVideoIdFromLink($link)
    {
        $videoId = null;
        $pattern = '/(?:youtube\.com\/(?:[^\/\n\s]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/';

        if (preg_match($pattern, $link, $matches)) {
            $videoId = $matches[1];
        }

        return $videoId;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $carrier = new Carrier;
        $carrier->name = $request->name;
        $carrier->description = $request->description;
        $carrier->stream = $request->stream;
        $carrier->interest = $request->interest;
        $carrier->link = $request->link;
        $carrier->more = $request->more;

        // Get the video ID from the link and save it to the carrier object
        $videoId = $this->extractVideoIdFromLink($request->link);
        if ($videoId) {
            $key = "AIzaSyAzbRE_ITqqwXIfs8sLah8DmgHfLUP15uc";
            $response = Http::get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id={$videoId}&key={$key}");
            if ($response->ok()) {
                $snippet = $response->json()['items'][0]['snippet'];
                $carrier->youtube_video_id = $videoId;
            }
        }

        $carrier->save();

        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//    public function show($id)
//    {
//        //
//    }

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
    public function show($id)
    {
        // Fetch the product details from the database based on the given id
        $carriers = Carrier::find($id);

        // If the product doesn't exist, return a 404 response
        if (!$carriers) {
            abort(404);
        }

        // Store the product id in the session
        session(['product_id' => $id]);

        // Return the product details as a response to a view
        return response()->json($carriers);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
