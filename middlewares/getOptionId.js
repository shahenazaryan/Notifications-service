const getOptionId = (req, res, next) => {
    // $instance     = $request->input('instance');
    //   $compId       = $request->input('comp_id');
    //   $calendar     = Options::where('comp_id', $compId)->where('instance', $instance)->first();
    //   if($calendar){
    //     $request['option_id'] = $calendar->id;
    // }
    
    //   return $next($request);

    next()
};

export default getOptionId