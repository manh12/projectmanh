<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\cate_document;
class CateDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cate_doc = cate_document::orderBy("id","DESC")->paginate(5);
        return response()->json($cate_doc);
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
        $cate_doc = new cate_document();
        $cate_doc->name = $request->name;
        $cate_doc->description = $request->description;
        $cate_doc->save();
        return response()->json($cate_doc);
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
        $cate_doc = cate_document::find($id);
        $cate_doc->name = $request->name;
        $cate_doc->description = $request->description;
        $cate_doc->save();
        return response()->json($cate_doc);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cate_doc  = cate_document::find($id);
        if(!$cate_doc){
            return response()->json(["error"=>"catedocument not found!"]);
        }
        $cate_doc->delete();
        return response()->json(['message'=>'success delete catedocument']);
    }
}
