(module
    (func $log (import "imports" "log_func") (param i32))

    (func $add (param $lhs i32) (param $rhs i32) (result i32)
        local.get $lhs
        local.get $rhs
        i32.add)

    (func $log_add (param $lhs i32) (param $rhs i32)
       	local.get $lhs
	local.get $rhs
	call $add
	call $log
    )

    (export "add" (func $add))
    (export "log_add" (func $log_add))
)