<?php
if (! function_exists('_uploadReact')){
    function _uploadReact($nameRequest,$folderName="")
    {
        if (!is_null($nameRequest)){
            $exploded = explode(',',$nameRequest);
            $decoded = base64_decode($exploded[1]);
            if (str_contains($exploded[0],'jpeg')){
                $extension = 'jpg';
            }
            elseif (str_contains($exploded[1],'webp')){
                $extension = 'webp';
            }
            else {
                $extension = 'png';
            }
            $fileName = str_random().'.'.$extension;
            $path = public_path().$folderName.$fileName;
            file_put_contents($path,$decoded);
            return $fileName;
        }
    }
}
if (! function_exists('_isUpload')) {
    function _isUpload($request1,$request2,$folderName) {
        if ($request1 === null) {
            return $request2;
        }else {
            return _uploadReact($request1, $folderName);
        }
    }
}
?>
