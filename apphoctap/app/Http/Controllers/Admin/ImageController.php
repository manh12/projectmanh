<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\imageRequest;
use App\Models\Image;
class ImageController extends Controller
{
    public function __construct(Image $image)
    {
        $this->slider = $image;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->slider->orderBy('id','desc')->paginate(4);
        return response()->json($data,200);
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
    public function store(imageRequest $request)
    {
        $data = collect($request->all())->merge([
            'images'=>_uploadReact($request->images,'/uploads/slider/')
        ])->toArray();
        $newdata = $this->slider->create($data);
        return response()->json(['data'=>$newdata,'message'=>'Thêm slider thành công!'],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $data = collect($request->all())->merge([
            'images' => _isUpload($request->images,$request->images2, '/uploads/slider/'),
        ])->toArray();
        array_forget($data, 'images2');
        $this->slider->findOrFail($id)->update($data);
        return response()->json(['message' => "Cập nhật slider thành công !"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->slider->findOrFail($id)->delete();
        return response()->json(['message'=>'xóa slider thành công!'],200);
    }
}
