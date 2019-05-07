<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Http\Requests\PageRequest;
use function PHPSTORM_META\type;

class PageController extends Controller
{
    public function __construct(Post $post)
    {
        $this->page = $post;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->page->orderBy('created_at','desc')->where('type',Post::TYPE['page'])->paginate(4);
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
    public function store(PageRequest $request)
    {
        $data = collect($request->all())->merge([
            'type'=>Post::TYPE['page'],
            'images'=>_uploadReact($request->images,'/uploads/page/'),
            'thumbnail'=>_uploadReact($request->thumbnail,'/uploads/page/'),
        ])->toArray();
        $newdata = $this->page->create($data);
        return response()->json(['data' => $newdata, 'message' => 'Thêm trang tĩnh thành công !'], 200);
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
    public function update(PageRequest $request, $id)
    {
        $data = collect($request->all())->merge([
            'images' => _isUpload($request->images,$request->images2, '/uploads/page/'),
            'thumbnail' => _isUpload($request->thumbnail,$request->thumbnail2 , '/uploads/page/'),
        ])->toArray();
        $newData = $this->page->findOrFail($id)->update($data);
        return response()->json(['data' => $newData, 'message' => 'Cập nhật trang tĩnh thành công !'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->page->findOrFail($id)->delete();
        return response()->json(['message'=>'Xóa trang tĩnh thành công !']);
    }
}
