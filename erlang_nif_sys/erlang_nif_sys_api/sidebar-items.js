initSidebarItems({"constant":[["ERL_NIF_BIN2TERM_SAFE",""],["ERL_NIF_DIRTY_JOB_CPU_BOUND",""],["ERL_NIF_DIRTY_JOB_IO_BOUND",""],["ERL_NIF_DIRTY_NIF_OPTION",""],["ERL_NIF_ENTRY_OPTIONS",""],["ERL_NIF_THR_DIRTY_CPU_SCHEDULER",""],["ERL_NIF_THR_DIRTY_IO_SCHEDULER",""],["ERL_NIF_THR_NORMAL_SCHEDULER",""],["ERL_NIF_THR_UNDEFINED",""],["ERL_NIF_TIME_ERROR","Error return value for `enif_monotonic_time()`, `enif_time_offset()`, and `enif_convert_time_unit()`."],["ERL_NIF_UNIQUE_MONOTONIC",""],["ERL_NIF_UNIQUE_POSITIVE",""],["NIF_MAJOR_VERSION",""],["NIF_MINOR_VERSION",""]],"enum":[["ErlNifCharEncoding","See ErlNifCharEncoding in the Erlang docs."],["ErlNifMapIteratorEntry","See ErlNifMapIteratorEntry in the Erlang docs."],["ErlNifResourceFlags","See ErlNifResourceFlags in the Erlang docs."],["ErlNifTimeUnit","See ErlNifTimeUnit in the Erlang docs."],["c_void","Type used to construct void pointers for use with C."]],"fn":[["enif_alloc","See enif_alloc in the Erlang docs."],["enif_alloc_binary","See enif_alloc_binary in the Erlang docs."],["enif_alloc_env","See enif_alloc_env in the Erlang docs."],["enif_alloc_resource","See enif_alloc_resource in the Erlang docs."],["enif_binary_to_term","See enif_binary_to_term in the Erlang docs."],["enif_clear_env","See enif_clear_env in the Erlang docs."],["enif_compare","See enif_compare in the Erlang docs."],["enif_consume_timeslice","See enif_consume_timeslice in the Erlang docs."],["enif_convert_time_unit","See enif_convert_time_unit in the Erlang docs."],["enif_cpu_time","See enif_cpu_time in the Erlang docs."],["enif_dlopen","See enif_dlopen in the Erlang docs."],["enif_dlsym","See enif_dlsym in the Erlang docs."],["enif_free","See enif_free in the Erlang docs."],["enif_free_env","See enif_free_env in the Erlang docs."],["enif_get_atom","See enif_get_atom in the Erlang docs."],["enif_get_atom_length","See enif_get_atom_length in the Erlang docs."],["enif_get_double","See enif_get_double in the Erlang docs."],["enif_get_int","See enif_get_int in the Erlang docs."],["enif_get_int64","See enif_get_int64 at erlang.org"],["enif_get_list_cell","See enif_get_list_cell in the Erlang docs."],["enif_get_list_length","See enif_get_list_length in the Erlang docs."],["enif_get_local_pid","See enif_get_local_pid in the Erlang docs."],["enif_get_local_port","See enif_get_local_port in the Erlang docs."],["enif_get_long","See enif_get_long in the Erlang docs."],["enif_get_map_size","See enif_get_map_size in the Erlang docs."],["enif_get_map_value","See enif_get_map_value in the Erlang docs."],["enif_get_resource","See enif_get_resource in the Erlang docs."],["enif_get_string","See enif_get_string in the Erlang docs."],["enif_get_tuple","See enif_get_tuple in the Erlang docs."],["enif_get_uint","See enif_get_uint in the Erlang docs."],["enif_get_uint64","See enif_get_uint64 at erlang.org"],["enif_get_ulong","See enif_get_ulong in the Erlang docs."],["enif_getenv","See enif_getenv in the Erlang docs."],["enif_has_pending_exception","See enif_has_pending_exception in the Erlang docs."],["enif_inspect_binary","See enif_inspect_binary in the Erlang docs."],["enif_inspect_iolist_as_binary","See enif_inspect_iolist_as_binary in the Erlang docs."],["enif_is_atom","See enif_is_atom in the Erlang docs."],["enif_is_binary","See enif_is_binary in the Erlang docs."],["enif_is_current_process_alive","See enif_is_current_process_alive in the Erlang docs."],["enif_is_empty_list","See enif_is_empty_list in the Erlang docs."],["enif_is_exception","See enif_is_exception in the Erlang docs."],["enif_is_fun","See enif_is_fun in the Erlang docs."],["enif_is_identical","See enif_is_identical in the Erlang docs."],["enif_is_list","See enif_is_list in the Erlang docs."],["enif_is_map","See enif_is_map in the Erlang docs."],["enif_is_number","See enif_is_number in the Erlang docs."],["enif_is_pid","See enif_is_pid in the Erlang docs."],["enif_is_port","See enif_is_port in the Erlang docs."],["enif_is_port_alive","See enif_is_port_alive in the Erlang docs."],["enif_is_process_alive","See enif_is_process_alive in the Erlang docs."],["enif_is_ref","See enif_is_ref in the Erlang docs."],["enif_is_tuple","See enif_is_tuple in the Erlang docs."],["enif_keep_resource","See enif_keep_resource in the Erlang docs."],["enif_make_atom","See enif_make_atom in the Erlang docs."],["enif_make_atom_len","See enif_make_atom_len in the Erlang docs."],["enif_make_badarg","See enif_make_badarg in the Erlang docs."],["enif_make_binary","See enif_make_binary in the Erlang docs."],["enif_make_copy","See enif_make_copy in the Erlang docs."],["enif_make_double","See enif_make_double in the Erlang docs."],["enif_make_existing_atom","See enif_make_existing_atom in the Erlang docs."],["enif_make_existing_atom_len","See enif_make_existing_atom_len in the Erlang docs."],["enif_make_int","See enif_make_int in the Erlang docs."],["enif_make_int64","See enif_make_int64 at erlang.org"],["enif_make_list_cell","See enif_make_list_cell in the Erlang docs."],["enif_make_list_from_array","See enif_make_list_from_array in the Erlang docs."],["enif_make_long","See enif_make_long in the Erlang docs."],["enif_make_map_put","See enif_make_map_put in the Erlang docs."],["enif_make_map_remove","See enif_make_map_remove in the Erlang docs."],["enif_make_map_update","See enif_make_map_update in the Erlang docs."],["enif_make_new_binary","See enif_make_new_binary in the Erlang docs."],["enif_make_new_map","See enif_make_new_map in the Erlang docs."],["enif_make_pid","See enif_make_pid in the Erlang docs"],["enif_make_ref","See enif_make_ref in the Erlang docs."],["enif_make_resource","See enif_make_resource in the Erlang docs."],["enif_make_resource_binary","See enif_make_resource_binary in the Erlang docs."],["enif_make_reverse_list","See enif_make_reverse_list in the Erlang docs."],["enif_make_string","See enif_make_string in the Erlang docs."],["enif_make_string_len","See enif_make_string_len in the Erlang docs."],["enif_make_sub_binary","See enif_make_sub_binary in the Erlang docs."],["enif_make_tuple_from_array","See enif_make_tuple_from_array in the Erlang docs."],["enif_make_uint","See enif_make_uint in the Erlang docs."],["enif_make_uint64","See enif_make_uint64 at erlang.org"],["enif_make_ulong","See enif_make_ulong in the Erlang docs."],["enif_make_unique_integer","See enif_make_unique_integer in the Erlang docs."],["enif_map_iterator_create","See enif_map_iterator_create in the Erlang docs."],["enif_map_iterator_destroy","See enif_map_iterator_destroy in the Erlang docs."],["enif_map_iterator_get_pair","See enif_map_iterator_get_pair in the Erlang docs."],["enif_map_iterator_is_head","See enif_map_iterator_is_head in the Erlang docs."],["enif_map_iterator_is_tail","See enif_map_iterator_is_tail in the Erlang docs."],["enif_map_iterator_next","See enif_map_iterator_next in the Erlang docs."],["enif_map_iterator_prev","See enif_map_iterator_prev in the Erlang docs."],["enif_monotonic_time","See enif_monotonic_time in the Erlang docs."],["enif_now_time","See enif_now_time in the Erlang docs."],["enif_open_resource_type","See enif_open_resource_type in the Erlang docs."],["enif_port_command","See enif_port_command in the Erlang docs."],["enif_priv_data","See enif_priv_data in the Erlang docs."],["enif_raise_exception","See enif_raise_exception in the Erlang docs."],["enif_realloc","See enif_realloc in the Erlang docs."],["enif_realloc_binary","See enif_realloc_binary in the Erlang docs."],["enif_release_binary","See enif_release_binary in the Erlang docs."],["enif_release_resource","See enif_release_resource in the Erlang docs."],["enif_schedule_nif","See enif_schedule_nif in the Erlang docs."],["enif_self","See enif_self in the Erlang docs."],["enif_send","See enif_send in the Erlang docs."],["enif_sizeof_resource","See enif_sizeof_resource in the Erlang docs."],["enif_system_info","See enif_system_info in the Erlang docs."],["enif_term_to_binary","See enif_term_to_binary in the Erlang docs."],["enif_thread_type","See enif_thread_type in the Erlang docs."],["enif_time_offset","See enif_time_offset in the Erlang docs."]],"struct":[["ErlNifBinary","See ErlNifBinary in the Erlang docs."],["ErlNifEnv","See ErlNifEnv in the Erlang docs."],["ErlNifFunc","See ErlNifFunc in the Erlang docs."],["ErlNifMapIterator","See ErlNifMapIterator in the Erlang docs."],["ErlNifPid","See ErlNifPid in the Erlang docs."],["ErlNifPort","See ErlNifPort in the Erlang docs."],["ErlNifResourceType","See ErlNifResourceType in the Erlang docs."],["ErlNifSysInfo","See ErlNifSysInfo in the Erlang docs."]],"type":[["ERL_NIF_TERM",""],["ERL_NIF_UINT",""],["ErlNifBinaryToTerm","See ErlNifBinaryToTerm in the Erlang docs."],["ErlNifDirtyTaskFlags",""],["ErlNifResourceDtor","See ErlNifResourceDtor in the Erlang docs."],["ErlNifTime","See ErlNifTime in the Erlang docs."],["ErlNifUniqueInteger","See ErlNifUniqueInteger in the Erlang docs."],["c_char",""],["c_double",""],["c_int",""],["c_long",""],["c_uchar",""],["c_uint",""],["c_ulong",""],["size_t",""]]});