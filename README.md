# 一些小的练习

都是小东西，但挺杂的。


sample
===
* 注释

	select #use("cols")# from department  where  #use("condition")#

cols
===
	department_id,department_name,department_order

updateSample
===
	
	department_id=#departmentId#,department_name=#departmentName#,department_order=#departmentOrder#

condition
===

	1 = 1  
	@if(!isEmpty(departmentId)){
	 and department_id=#departmentId#
	@}
	@if(!isEmpty(departmentName)){
	 and department_name=#departmentName#
	@}
	@if(!isEmpty(departmentOrder)){
	 and department_order=#departmentOrder#
	@}
	
	
	
