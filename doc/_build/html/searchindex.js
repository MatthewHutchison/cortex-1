Search.setIndex({envversion:47,filenames:["demos","index","setup","source/cortex","source/cortex.analysis","source/cortex.analysis.mri","source/cortex.datasets","source/cortex.datasets.basic","source/cortex.datasets.neuroimaging","source/cortex.demos","source/cortex.demos.demos_basic","source/cortex.demos.demos_neuroimaging","source/cortex.inference","source/cortex.models","source/cortex.models.tests","source/cortex.utils","source/modules"],objects:{"":{cortex:[3,0,0,"-"]},"cortex.analysis":{load_mri:[4,0,0,"-"],mri:[5,0,0,"-"],read_fmri:[4,0,0,"-"]},"cortex.analysis.load_mri":{find_niftis:[4,1,1,""],load_niftis:[4,1,1,""],main:[4,1,1,""],make_argument_parser:[4,1,1,""],read_niftis:[4,1,1,""],save_mask:[4,1,1,""]},"cortex.analysis.mri":{rois:[5,0,0,"-"]},"cortex.analysis.mri.rois":{check_grey:[5,1,1,""],check_pair:[5,1,1,""],cluster_worker:[5,1,1,""],find_clusters_from_3D:[5,1,1,""],find_clusters_from_4D:[5,1,1,""],find_region_names:[5,1,1,""],find_rois:[5,1,1,""],get_cluster_info:[5,1,1,""],lat_opposite:[5,1,1,""],main:[5,1,1,""],make_argument_parser:[5,1,1,""],return_region:[5,1,1,""],save_roi_txt:[5,1,1,""],worker_helper:[5,1,1,""]},"cortex.analysis.read_fmri":{load_niftis:[4,1,1,""],main:[4,1,1,""],read_niftis:[4,1,1,""],save_mask:[4,1,1,""]},"cortex.datasets":{BasicDataset:[6,2,1,""],Dataset:[6,2,1,""],basic:[7,0,0,"-"],fetch_basic_data:[6,1,1,""],load_data:[6,1,1,""],load_data_split:[6,1,1,""],make_datasets:[6,1,1,""],make_one_hot:[6,1,1,""],neuroimaging:[8,0,0,"-"],resolve:[6,1,1,""]},"cortex.datasets.BasicDataset":{X:[6,3,1,""],Y:[6,3,1,""],balance_labels:[6,4,1,""],data:[6,3,1,""],dims:[6,3,1,""],distributions:[6,3,1,""],mean_image:[6,3,1,""],n:[6,3,1,""],next:[6,4,1,""],randomize:[6,4,1,""]},"cortex.datasets.Dataset":{balance:[6,3,1,""],batch_size:[6,3,1,""],inf:[6,3,1,""],mode:[6,3,1,""],name:[6,3,1,""],pos:[6,3,1,""],randomize:[6,4,1,""],reset:[6,4,1,""],save_images:[6,4,1,""],shuffle:[6,3,1,""],stop:[6,3,1,""]},"cortex.datasets.basic":{caltech:[7,0,0,"-"],cifar:[7,0,0,"-"],euclidean:[7,0,0,"-"],horses:[7,0,0,"-"],mnist:[7,0,0,"-"],uci:[7,0,0,"-"]},"cortex.datasets.basic.caltech":{CALTECH:[7,2,1,""]},"cortex.datasets.basic.caltech.CALTECH":{get_data:[7,4,1,""]},"cortex.datasets.basic.cifar":{CIFAR:[7,2,1,""],get_iter:[7,1,1,""]},"cortex.datasets.basic.cifar.CIFAR":{get_data:[7,4,1,""],next:[7,4,1,""],randomize:[7,4,1,""],reset:[7,4,1,""],save_images:[7,4,1,""],show:[7,4,1,""],translate:[7,4,1,""]},"cortex.datasets.basic.euclidean":{Euclidean:[7,2,1,""]},"cortex.datasets.basic.euclidean.Euclidean":{get_data:[7,4,1,""],gravity:[7,4,1,""],make_bullseye:[7,4,1,""],make_circle:[7,4,1,""],make_ex:[7,4,1,""],make_fibrous:[7,4,1,""],make_modes:[7,4,1,""],make_spiral:[7,4,1,""],next:[7,4,1,""],randomize:[7,4,1,""],save_images:[7,4,1,""]},"cortex.datasets.basic.horses":{Horses:[7,2,1,""],reshape_image:[7,1,1,""]},"cortex.datasets.basic.horses.Horses":{next:[7,4,1,""],randomize:[7,4,1,""],save_images:[7,4,1,""],show:[7,4,1,""]},"cortex.datasets.basic.mnist":{MNIST:[7,2,1,""]},"cortex.datasets.basic.mnist.MNIST":{get_data:[7,4,1,""],save_images:[7,4,1,""],show:[7,4,1,""],translate:[7,4,1,""]},"cortex.datasets.basic.uci":{UCI:[7,2,1,""]},"cortex.datasets.basic.uci.UCI":{get_data:[7,4,1,""],next:[7,4,1,""],randomize:[7,4,1,""],reset:[7,4,1,""],save_images:[7,4,1,""]},"cortex.datasets.neuroimaging":{fetch_neuroimaging_data:[8,1,1,""],fmri:[8,0,0,"-"],medfilt:[8,1,1,""],mri:[8,0,0,"-"],nifti_viewer:[8,0,0,"-"],resolve:[8,1,1,""],simTB:[8,0,0,"-"],snp:[8,0,0,"-"]},"cortex.datasets.neuroimaging.fmri":{FMRI:[8,2,1,""],FMRI_IID:[8,2,1,""]},"cortex.datasets.neuroimaging.fmri.FMRI":{idx:[8,3,1,""],n:[8,3,1,""],next:[8,4,1,""],randomize:[8,4,1,""],stride:[8,3,1,""],window:[8,3,1,""]},"cortex.datasets.neuroimaging.fmri.FMRI_IID":{extras:[8,3,1,""],get_data:[8,4,1,""]},"cortex.datasets.neuroimaging.mri":{MRI:[8,2,1,""]},"cortex.datasets.neuroimaging.mri.MRI":{anat_file:[8,3,1,""],base_nifti_file:[8,3,1,""],get_data:[8,4,1,""],image_shape:[8,3,1,""],make_image:[8,4,1,""],mask:[8,3,1,""],pca:[8,3,1,""],pca_components:[8,3,1,""],save_images:[8,4,1,""],save_niftis:[8,4,1,""],sites:[8,3,1,""],tmp_path:[8,3,1,""]},"cortex.datasets.neuroimaging.nifti_viewer":{main:[8,1,1,""],make_argument_parser:[8,1,1,""],montage:[8,1,1,""],save_helper:[8,1,1,""],save_image:[8,1,1,""],save_images:[8,1,1,""]},"cortex.datasets.neuroimaging.simTB":{SimTB:[8,2,1,""]},"cortex.datasets.neuroimaging.simTB.SimTB":{get_data:[8,4,1,""],next:[8,4,1,""],save_images:[8,4,1,""]},"cortex.datasets.neuroimaging.snp":{SNP:[8,2,1,""]},"cortex.datasets.neuroimaging.snp.SNP":{get_data:[8,4,1,""]},"cortex.demos":{demos_basic:[10,0,0,"-"],demos_neuroimaging:[11,0,0,"-"]},"cortex.demos.demos_basic":{classifier:[10,0,0,"-"],eval_rbm:[10,0,0,"-"],rbm_mnist:[10,0,0,"-"],run_classifier_demo:[10,1,1,""],run_demo:[10,1,1,""],run_rbm_demo:[10,1,1,""],run_vae_demo:[10,1,1,""],vae:[10,0,0,"-"]},"cortex.demos.demos_basic.classifier":{init_learning_args:[10,1,1,""],train:[10,1,1,""]},"cortex.demos.demos_basic.eval_rbm":{evaluate:[10,1,1,""]},"cortex.demos.demos_basic.rbm_mnist":{init_inference_args:[10,1,1,""],init_learning_args:[10,1,1,""],train:[10,1,1,""]},"cortex.demos.demos_basic.vae":{init_learning_args:[10,1,1,""],train:[10,1,1,""]},"cortex.demos.demos_neuroimaging":{rbm_ni:[11,0,0,"-"],run_demo:[11,1,1,""],run_rbm_olin_demo:[11,1,1,""],run_rbm_vbm_demo:[11,1,1,""],vae:[11,0,0,"-"]},"cortex.demos.demos_neuroimaging.rbm_ni":{init_inference_args:[11,1,1,""],init_learning_args:[11,1,1,""],train:[11,1,1,""]},"cortex.demos.demos_neuroimaging.vae":{init_learning_args:[11,1,1,""],train:[11,1,1,""]},"cortex.inference":{air:[12,0,0,"-"],gdir:[12,0,0,"-"],irvi:[12,0,0,"-"],resolve:[12,1,1,""],rws:[12,0,0,"-"]},"cortex.inference.air":{AIR:[12,2,1,""],DeepAIR:[12,2,1,""]},"cortex.inference.air.AIR":{init_infer:[12,4,1,""],params_infer:[12,4,1,""],step_infer:[12,4,1,""],unpack_infer:[12,4,1,""]},"cortex.inference.air.DeepAIR":{init_infer:[12,4,1,""],params_infer:[12,4,1,""],step_infer:[12,4,1,""],unpack_infer:[12,4,1,""]},"cortex.inference.gdir":{GDIR:[12,2,1,""],MomentumGDIR:[12,2,1,""]},"cortex.inference.gdir.GDIR":{e_step:[12,4,1,""]},"cortex.inference.gdir.MomentumGDIR":{init_infer:[12,4,1,""],params_infer:[12,4,1,""],step_infer:[12,4,1,""],unpack_infer:[12,4,1,""]},"cortex.inference.irvi":{DeepIRVI:[12,2,1,""],IRVI:[12,2,1,""]},"cortex.inference.irvi.DeepIRVI":{inference:[12,4,1,""],init_infer:[12,4,1,""],init_variational_inference:[12,4,1,""],params_infer:[12,4,1,""],step_infer:[12,4,1,""],test:[12,4,1,""],unpack_infer:[12,4,1,""]},"cortex.inference.irvi.IRVI":{inference:[12,4,1,""],init_infer:[12,4,1,""],init_variational_inference:[12,4,1,""],params_infer:[12,4,1,""],step_infer:[12,4,1,""],test:[12,4,1,""],unpack_infer:[12,4,1,""]},"cortex.inference.rws":{DeepRWS:[12,2,1,""],RWS:[12,2,1,""]},"cortex.inference.rws.RWS":{test:[12,4,1,""]},"cortex.models":{Layer:[13,2,1,""],darn:[13,0,0,"-"],deep_helmholtz:[13,0,0,"-"],distributions:[13,0,0,"-"],gru:[13,0,0,"-"],helmholtz:[13,0,0,"-"],layers:[13,0,0,"-"],lstm:[13,0,0,"-"],mlp:[13,0,0,"-"],rbm:[13,0,0,"-"],rnn:[13,0,0,"-"],tests:[14,0,0,"-"]},"cortex.models.Layer":{copy:[13,4,1,""],excludes:[13,3,1,""],get_excludes:[13,4,1,""],learn:[13,3,1,""],n_params:[13,3,1,""],name:[13,3,1,""],params:[13,3,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""]},"cortex.models.darn":{AutoRegressor:[13,2,1,""],DARN:[13,2,1,""]},"cortex.models.darn.AutoRegressor":{entropy:[13,4,1,""],get_L2_weight_cost:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],neg_log_prob:[13,4,1,""],prototype_samples:[13,4,1,""],sample:[13,4,1,""],set_params:[13,4,1,""],step_neg_log_prob:[13,4,1,""]},"cortex.models.darn.DARN":{entropy:[13,4,1,""],factory:[13,5,1,""],get_L2_weight_cost:[13,4,1,""],get_params:[13,4,1,""],must_sample:[13,3,1,""],neg_log_prob:[13,4,1,""],preact:[13,4,1,""],prob:[13,4,1,""],sample:[13,4,1,""],set_params:[13,4,1,""],step_call:[13,4,1,""],step_neg_log_prob:[13,4,1,""]},"cortex.models.deep_helmholtz":{DeepHelmholtz:[13,2,1,""],unpack:[13,1,1,""]},"cortex.models.deep_helmholtz.DeepHelmholtz":{factory:[13,5,1,""],generate_from_latent:[13,4,1,""],get_center:[13,4,1,""],get_conditional_params:[13,4,1,""],get_params:[13,4,1,""],get_posterior_params:[13,4,1,""],get_prior_params:[13,4,1,""],init_inference_samples:[13,4,1,""],l2_decay:[13,4,1,""],mlp_factory:[13,5,1,""],p_y_given_h:[13,4,1,""],sample_from_prior:[13,4,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""],visualize_latents:[13,4,1,""]},"cortex.models.distributions":{Binomial:[13,2,1,""],CenteredBinomial:[13,2,1,""],ContinuousBinomial:[13,2,1,""],Distribution:[13,2,1,""],Gaussian:[13,2,1,""],Laplace:[13,2,1,""],Logistic:[13,2,1,""],Multinomial:[13,2,1,""],make_conditional:[13,1,1,""],resolve:[13,1,1,""]},"cortex.models.distributions.Binomial":{generate_latent_pair:[13,4,1,""],get_energy_bias:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],prototype_samples:[13,4,1,""],set_params:[13,4,1,""],split_prob:[13,4,1,""],step_sample:[13,4,1,""],visualize:[13,4,1,""]},"cortex.models.distributions.CenteredBinomial":{get_prob:[13,4,1,""],neg_log_prob:[13,4,1,""],sample:[13,4,1,""],step_sample:[13,4,1,""]},"cortex.models.distributions.ContinuousBinomial":{sample:[13,4,1,""]},"cortex.models.distributions.Distribution":{dim:[13,3,1,""],entropy:[13,4,1,""],f_entropy:[13,3,1,""],f_neg_log_prob:[13,3,1,""],f_sample:[13,3,1,""],get_center:[13,4,1,""],get_energy_bias:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],has_kl:[13,3,1,""],is_continuous:[13,3,1,""],kl_divergence:[13,4,1,""],must_sample:[13,3,1,""],neg_log_prob:[13,4,1,""],sample:[13,4,1,""],scale:[13,3,1,""],scale_for_energy_model:[13,4,1,""],set_params:[13,4,1,""],step_neg_log_prob:[13,4,1,""]},"cortex.models.distributions.Gaussian":{entropy:[13,4,1,""],generate_latent_pair:[13,4,1,""],get_center:[13,4,1,""],get_energy_bias:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],has_kl:[13,3,1,""],is_continuous:[13,3,1,""],kl_divergence:[13,4,1,""],neg_log_prob:[13,4,1,""],prototype_samples:[13,4,1,""],scale_for_energy_model:[13,4,1,""],set_params:[13,4,1,""],split_prob:[13,4,1,""],standard_prob:[13,4,1,""],step_kl_divergence:[13,4,1,""],step_neg_log_prob:[13,4,1,""],step_sample:[13,4,1,""],visualize:[13,4,1,""]},"cortex.models.distributions.Laplace":{entropy:[13,4,1,""],generate_latent_pair:[13,4,1,""],get_center:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],is_continuous:[13,3,1,""],neg_log_prob:[13,4,1,""],prototype_samples:[13,4,1,""],set_params:[13,4,1,""],split_prob:[13,4,1,""],standard_prob:[13,4,1,""],step_neg_log_prob:[13,4,1,""],step_sample:[13,4,1,""],visualize:[13,4,1,""]},"cortex.models.distributions.Logistic":{entropy:[13,4,1,""],generate_latent_pair:[13,4,1,""],get_center:[13,4,1,""],get_params:[13,4,1,""],get_prob:[13,4,1,""],is_continuous:[13,3,1,""],neg_log_prob:[13,4,1,""],prototype_samples:[13,4,1,""],set_params:[13,4,1,""],split_prob:[13,4,1,""],standard_prob:[13,4,1,""],step_neg_log_prob:[13,4,1,""],step_sample:[13,4,1,""],visualize:[13,4,1,""]},"cortex.models.distributions.Multinomial":{get_prob:[13,4,1,""],set_params:[13,4,1,""]},"cortex.models.gru":{GRU:[13,2,1,""]},"cortex.models.gru.GRU":{call_seqs:[13,4,1,""],factory:[13,5,1,""],get_aux_args:[13,4,1,""],get_conditional_args:[13,4,1,""],get_gates:[13,4,1,""],get_input_args:[13,4,1,""],get_inter_aux_args:[13,4,1,""],get_output_args:[13,4,1,""],get_params:[13,4,1,""],set_net_params:[13,4,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""],step_call:[13,4,1,""],step_sample_preact:[13,4,1,""]},"cortex.models.helmholtz":{Helmholtz:[13,2,1,""],unpack:[13,1,1,""]},"cortex.models.helmholtz.Helmholtz":{conditional:[13,3,1,""],factory:[13,5,1,""],generate_from_latent:[13,4,1,""],get_center:[13,4,1,""],get_params:[13,4,1,""],get_posterior_params:[13,4,1,""],get_prior_params:[13,4,1,""],init_inference_samples:[13,4,1,""],l2_decay:[13,4,1,""],log_marginal:[13,4,1,""],mlp_factory:[13,5,1,""],p_y_given_h:[13,4,1,""],posterior:[13,3,1,""],prior:[13,3,1,""],sample_from_prior:[13,4,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""],visualize_latents:[13,4,1,""]},"cortex.models.layers":{Averager:[13,2,1,""],Baseline:[13,2,1,""],BaselineWithInput:[13,2,1,""],ParzenEstimator:[13,2,1,""],ScalingWithInput:[13,2,1,""],Scheduler:[13,2,1,""]},"cortex.models.layers.Averager":{set_params:[13,4,1,""]},"cortex.models.layers.Baseline":{set_params:[13,4,1,""]},"cortex.models.layers.BaselineWithInput":{set_params:[13,4,1,""]},"cortex.models.layers.ParzenEstimator":{get_sigma:[13,4,1,""],set_params:[13,4,1,""]},"cortex.models.layers.ScalingWithInput":{set_params:[13,4,1,""]},"cortex.models.layers.Scheduler":{set_params:[13,4,1,""]},"cortex.models.lstm":{LSTM:[13,2,1,""]},"cortex.models.lstm.LSTM":{call_seqs:[13,4,1,""],factory:[13,5,1,""],get_gates:[13,4,1,""],mlp_factory:[13,5,1,""],sample:[13,4,1,""],set_net_params:[13,4,1,""],set_params:[13,4,1,""],step_call:[13,4,1,""],step_sample:[13,4,1,""],step_sample_preact:[13,4,1,""]},"cortex.models.mlp":{MLP:[13,2,1,""],resolve:[13,1,1,""]},"cortex.models.mlp.MLP":{dim_h:[13,3,1,""],dim_hs:[13,3,1,""],dim_in:[13,3,1,""],dim_out:[13,3,1,""],distribution:[13,3,1,""],entropy:[13,4,1,""],factory:[13,5,1,""],feed:[13,4,1,""],get_center:[13,4,1,""],get_params:[13,4,1,""],h_act:[13,3,1,""],l2_decay:[13,4,1,""],must_sample:[13,3,1,""],n_layers:[13,3,1,""],neg_log_prob:[13,4,1,""],preact:[13,4,1,""],sample:[13,4,1,""],set_params:[13,4,1,""],split_prob:[13,4,1,""],step_call:[13,4,1,""],step_feed:[13,4,1,""],step_preact:[13,4,1,""]},"cortex.models.rbm":{RBM:[13,2,1,""],unpack:[13,1,1,""]},"cortex.models.rbm.RBM":{W:[13,3,1,""],ais:[13,4,1,""],dim_h:[13,3,1,""],dim_v:[13,3,1,""],energy:[13,4,1,""],estimate_nll:[13,4,1,""],factory:[13,5,1,""],free_energy:[13,4,1,""],free_energy_h:[13,4,1,""],get_params:[13,4,1,""],h_dist:[13,3,1,""],h_neg_log_prob:[13,4,1,""],l1_decay:[13,4,1,""],l2_decay:[13,4,1,""],log_Z:[13,3,1,""],mean_image:[13,3,1,""],ph_v:[13,4,1,""],pv_h:[13,4,1,""],reconstruct:[13,4,1,""],sample:[13,4,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""],split_params:[13,4,1,""],std_log_Z:[13,3,1,""],step_free_energy:[13,4,1,""],step_free_energy_h:[13,4,1,""],step_gibbs:[13,4,1,""],step_gibbs_ais:[13,4,1,""],step_ph_v:[13,4,1,""],step_pv_h:[13,4,1,""],step_sh_v:[13,4,1,""],step_sv_h:[13,4,1,""],update_partition_function:[13,4,1,""],v_dist:[13,3,1,""],v_neg_log_prob:[13,4,1,""]},"cortex.models.rnn":{RNN:[13,2,1,""],SimpleRNN:[13,2,1,""],init_h:[13,1,1,""],unpack:[13,1,1,""]},"cortex.models.rnn.RNN":{call_seqs:[13,4,1,""],condtional:[13,3,1,""],dim_hs:[13,3,1,""],dim_in:[13,3,1,""],dim_out:[13,3,1,""],energy:[13,4,1,""],factory:[13,5,1,""],get_conditional_args:[13,4,1,""],get_input_args:[13,4,1,""],get_inter_args:[13,4,1,""],get_net_params:[13,4,1,""],get_output_args:[13,4,1,""],get_params:[13,4,1,""],get_recurrent_args:[13,4,1,""],get_sample_params:[13,4,1,""],input_net:[13,3,1,""],inter_nets:[13,3,1,""],l2_decay:[13,4,1,""],n_layers:[13,3,1,""],neg_log_prob:[13,4,1,""],nets:[13,3,1,""],output_net:[13,3,1,""],sample:[13,4,1,""],set_net_params:[13,4,1,""],set_params:[13,4,1,""],set_tparams:[13,4,1,""],step_call:[13,4,1,""],step_sample:[13,4,1,""],step_sample_preact:[13,4,1,""]},"cortex.models.rnn.SimpleRNN":{energy:[13,4,1,""],factory:[13,5,1,""],sample:[13,4,1,""]},"cortex.models.tests":{test_darn:[14,0,0,"-"],test_mlp:[14,0,0,"-"],test_rbm:[14,0,0,"-"],test_rnn:[14,0,0,"-"],test_vae:[14,0,0,"-"]},"cortex.models.tests.test_darn":{sigmoid:[14,1,1,""],test_autoregressor:[14,1,1,""],test_darn:[14,1,1,""]},"cortex.models.tests.test_mlp":{test_feed_forward:[14,1,1,""],test_make_mlp:[14,1,1,""]},"cortex.models.tests.test_rbm":{test_build:[14,1,1,""],test_sample:[14,1,1,""]},"cortex.models.tests.test_rnn":{sigmoid:[14,1,1,""],test_build:[14,1,1,""],test_recurrent:[14,1,1,""]},"cortex.models.tests.test_vae":{test_build_GBN:[14,1,1,""],test_call:[14,1,1,""]},"cortex.utils":{extra:[15,0,0,"-"],learning_scheduler:[15,0,0,"-"],logger:[15,0,0,"-"],monitor:[15,0,0,"-"],op:[15,0,0,"-"],preprocessor:[15,0,0,"-"],tools:[15,0,0,"-"],training:[15,0,0,"-"],vis_utils:[15,0,0,"-"]},"cortex.utils.extra":{complete_path:[15,1,1,""],download_data:[15,1,1,""],query_yes_no:[15,1,1,""],unzip:[15,1,1,""],write_path_conf:[15,1,1,""]},"cortex.utils.learning_scheduler":{Scheduler:[15,2,1,""],unpack:[15,1,1,""]},"cortex.utils.learning_scheduler.Scheduler":{d:[15,3,1,""]},"cortex.utils.logger":{setup_custom_logger:[15,1,1,""]},"cortex.utils.monitor":{SimpleMonitor:[15,2,1,""]},"cortex.utils.monitor.SimpleMonitor":{add:[15,4,1,""],d:[15,3,1,""],d_valid:[15,3,1,""],display:[15,4,1,""],save:[15,4,1,""],save_stats:[15,4,1,""],save_stats_valid:[15,4,1,""],simple_display:[15,4,1,""],update:[15,4,1,""],update_valid:[15,4,1,""]},"cortex.utils.op":{adadelta:[15,1,1,""],adam2:[15,1,1,""],adam3:[15,1,1,""],adam:[15,1,1,""],rmsprop2:[15,1,1,""],rmsprop:[15,1,1,""],sgd:[15,1,1,""]},"cortex.utils.preprocessor":{Preprocessor:[15,2,1,""]},"cortex.utils.preprocessor.Preprocessor":{center:[15,4,1,""],keys:[15,3,1,""],keyvals:[15,3,1,""],processes:[15,3,1,""]},"cortex.utils.tools":{check_bad_nums:[15,1,1,""],concatenate:[15,1,1,""],debug_shape:[15,1,1,""],flatten_dict:[15,1,1,""],get_paths:[15,1,1,""],get_srng:[15,1,1,""],get_trng:[15,1,1,""],get_w_tilde:[15,1,1,""],init_rngs:[15,1,1,""],init_weights:[15,1,1,""],itemlist:[15,1,1,""],load_experiment:[15,1,1,""],load_model:[15,1,1,""],log_mean_exp:[15,1,1,""],log_sum_exp:[15,1,1,""],logit:[15,1,1,""],norm_weight:[15,1,1,""],ortho_weight:[15,1,1,""],parzen_estimation:[15,1,1,""],print_profile:[15,1,1,""],print_section:[15,1,1,""],resolve_path:[15,1,1,""],scan:[15,1,1,""],shuffle_columns:[15,1,1,""],unzip:[15,1,1,""],update_dict_of_lists:[15,1,1,""],warn_kwargs:[15,1,1,""],zipp:[15,1,1,""]},"cortex.utils.training":{main_loop:[15,1,1,""],make_argument_parser:[15,1,1,""],make_argument_parser_test:[15,1,1,""],reload_model:[15,1,1,""],set_experiment:[15,1,1,""],set_model:[15,1,1,""],set_optimizer:[15,1,1,""],set_params:[15,1,1,""],set_tparams:[15,1,1,""],test:[15,1,1,""],validate:[15,1,1,""]},"cortex.utils.vis_utils":{scale_to_unit_interval:[15,1,1,""],tile_raster_images:[15,1,1,""]},cortex:{analysis:[4,0,0,"-"],datasets:[6,0,0,"-"],demos:[9,0,0,"-"],inference:[12,0,0,"-"],main:[3,1,1,""],models:[13,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:staticmethod"},terms:{"__call__":13,"__init__":13,"case":2,"class":[1,6,7,8,10,12,13,15],"default":[2,10,15],"float":[5,8,10,12,13,15],"function":[0,2,5,8,12,13,15],"import":12,"int":[4,5,6,8,10,12,13,15],"new":[1,4,12,15],"return":[4,5,6,7,8,10,12,13,15],"static":13,"switch":[2,10],"true":[6,7,8,10,11,12,13,15],"try":[10,11],a_net:13,abov:10,across:12,act:10,activ:13,adadelta:15,adam2:15,adam3:15,adam:15,adapt:12,add:[2,8,15],addit:[8,13],administr:2,afni:[2,5],after:[6,8],against:15,air:[],aka:13,all:[1,5,12,13,15],all_param:[],alon:13,along:[8,15],alreadi:[6,13],also:[6,13,15],altern:15,analysi:[],anat:8,anat_fil:8,anatom:8,ani:[1,6],anneal:13,answer:15,anywai:15,aod:8,aod_0:8,aod_1:8,aod_mask:8,aod_sit:8,api:8,append:15,appli:8,applic:15,approxim:[12,13],arbitrari:13,arctic:15,arg:[4,5,6,8,10,12,13,15],argpars:15,argsument:15,arguement:13,argument:[4,8,10,12,13,15],argumentpars:[5,8],argv:[5,8],arrai:[4,6,7,8,13,15],arrang:7,as_numpi:15,ask:[2,15],assert:15,assum:13,atla:5,atlas:5,atrribut:12,attempt:15,autoregressor:13,avail:[0,6],averag:13,axi:[8,13,15],b_a:13,b_b:13,background:8,backpropag:15,bad:4,balanc:6,balance_label:6,bar:13,base:[6,7,8,12,13,15],base_nifti:8,base_nifti_fil:8,baselin:13,baseline_with_input:13,baselinewithinput:13,basi:15,basic:[],basicdataset:[6,7,8],batch:[6,8,13],batch_siz:[6,7,8,10,11,13,14],becaus:15,been:6,befor:15,best:[2,15],best_epoch:15,best_valid:15,bestfil:15,beta:13,better:15,between:[13,15],bgcol:8,binar:7,binari:13,binary_cross_entropi:[],binomi:[13,14],bool:[6,7,8,12,13,15],bound:12,boundari:8,brand:1,bug:1,build:[2,13,15],c_a:13,c_b:13,c_net:13,ca_n27_gw:5,cacluat:13,calcul:[13,15],call:5,call_seq:13,caltech:[],can:[0,1,2,8,13,15],categorical_cross_entropi:[],center:[13,15],center_input:[],centeredbinomi:13,ch2better_whitebg_aligned2epi_v4:8,chain:13,chang:[5,13],channel:15,check:[5,15],check_bad_num:15,check_grei:5,check_pair:5,child:12,cho:15,choic:13,chould:5,cifar:[],classifi:[],classifier_mnist:10,clip:13,clone:2,cluster:[5,8],cluster_dict:8,cluster_work:5,code:8,coeffici:15,col:15,collect:8,color:8,column:15,com:2,command:[0,2,4,5,10,11,15],common:1,compar:15,complet:[12,15],complete_path:15,compliment:1,compon:[8,13],comput:[13,15],concaten:15,condit:[12,13],condition_on:13,condtion:13,condtion_on:13,conf:[],configur:[13,15],confus:13,connect:15,constant:[12,13,15],construct:[6,13],contain:15,continu:[8,13],continuousbinomi:13,contrari:15,control:[8,15],conveni:[13,15],conver:7,convert_one_hot:8,coord:5,coordin:5,copi:[2,13,15],core:8,correspond:[5,6,15],cortexrc:[2,15],cost:[],could:5,cpu:15,creat:[1,5,6,8,13,15],create_model:15,creation:15,crop_imag:7,cross:13,current:[1,2,5,6,8,12,13],custom:[2,15],customiz:1,d_logz:[],d_to_upd:15,d_valid:15,darn:[],data:[0,2,4,6,7,8,12,13,15],data_it:[13,15],data_path:15,dataset:[],dataset_arg:[6,10,11],date:2,debug:[13,15],debug_shap:15,decai:[10,13,15],decay_r:15,decomposit:8,deep:[12,13],deep_helmholtz:[],deepair:12,deepgdir:12,deephelmholtz:13,deepirvi:12,deeprw:12,def:15,defin:[5,13,15],delet:8,demo:[],demos_bas:[],demos_neuroimag:[],densiti:[7,13],descent:[12,15],design:13,detail:[6,13,15],develop:[1,2],devon:8,dhjelm:5,diagnosi:8,dict:[5,6,8,10,12,13,15],dictionari:[6,8,12,13,15],differ:[12,13,15],dim:[6,7,13,14,15],dim_f:[],dim_h:[10,11,13,14],dim_in:[13,14],dim_out:[13,14],dim_v:[13,14],dimens:[6,13],dimension:13,dimenst:13,diment:13,dims_in:13,direct:7,directionari:15,director:15,directori:[2,4,8,10,15],discret:[8,13],displai:15,distribuion:13,distribut:[],distribution_arg:13,diverg:13,do_pca:[],doe:15,doesn:13,don:2,done:15,download:15,download_data:15,dq_:12,draw:[6,8,12],dropout:[10,15],dropout_r:10,dtype:15,dure:12,e_step:12,each:[6,13,15],easi:15,easili:15,either:[2,8],element:15,email:1,encount:1,end_mod:[],endpoint:8,energi:13,enter:[],entropi:13,epoch:[6,10,11,13,15],epsilon:[12,13],error:[10,13,15],estim:[13,15],estimate_nl:13,etc:[4,12,13,15],euclidean:[],eval:10,eval_rbm:[],evalu:[1,10],everi:[10,13,15],exact:13,exactli:15,exampl:[2,8,15],exclud:[10,11,13,15],exclude_param:15,exist:15,exp:15,exp_dict:[],experi:[10,15],experiment_yaml:15,express:15,extend:[8,15],extra:[],extra_arg:[13,15],extra_out:15,extra_outs_kei:15,extra_up:15,extract:15,f_entropi:13,f_extra:15,f_grad_shar:15,f_grad_upd:15,f_neg_log_prob:13,f_sampl:13,f_scan:15,f_test:15,f_test_kei:15,f_unpack:15,factor:13,factori:[10,13],fail:15,fals:[5,6,7,10,11,12,13,15],feed:[1,13],feel:15,fetch:[6,7,8,13],fetch_basic_data:6,fetch_neuroimaging_data:8,fig:8,figur:[8,15],file:[2,4,5,7,8,15],file_list:4,filter:[4,8,10],filter_in:[],find:[4,5],find_clusters_from_3d:5,find_clusters_from_4d:5,find_nifti:4,find_region_nam:5,find_roi:5,first:[2,12,15],flatten:15,flatten_dict:15,floor:15,fmri:[],fmri_iid:8,fnifti:5,folder:2,follow:[0,1,2],form:[8,13],format:8,forward:[1,13],framework:1,free:[13,15],free_energi:13,free_energy_h:13,fresh:13,from:[2,4,5,6,7,8,10,12,13,15],fromarrai:15,full:[13,15],full_result:[],funciton:13,futur:[5,13],gamma:13,gate:13,gaussian:[8,10,11,13],gaussian_log_sigma:[10,11],gaussian_mu:[10,11],gbn:13,gdir:[],gen_arg:[10,11,13],gener:[6,13,15],generate_from_lat:13,generate_latent_pair:13,genet:8,get:[2,5,13,15],get_aux_arg:13,get_cent:13,get_cluster_info:5,get_conditional_arg:13,get_conditional_param:13,get_data:[7,8],get_energy_bia:13,get_exclud:13,get_gat:13,get_input_arg:13,get_inter_arg:13,get_inter_aux_arg:13,get_it:7,get_l2_weight_cost:13,get_net_param:13,get_output_arg:13,get_param:13,get_path:15,get_posterior_param:13,get_prior_param:13,get_prob:13,get_recurrent_arg:13,get_sample_param:13,get_sigma:13,get_srng:15,get_trng:15,get_w_tild:15,gibb:13,git:2,github:[1,2],give:2,given:13,glob:4,good:10,gpu:15,grad:15,gradient:[12,15],graph:[],grasp:15,graviti:7,grei:5,greyscal:7,gru:[],guidelin:2,gzip:7,h000a:8,h5py:2,h_a:13,h_act:[13,14],h_arg:13,h_b:13,h_dist:13,h_init:13,h_neg_log_prob:13,h_net:13,handl:[4,8],has_kl:13,have:[1,2,5,15],health:8,height:15,helmholtz:[],helmhotlz:13,help:15,helper:15,here:13,heurist:15,hidden:13,higher:13,hinge_loss:[],hit:[],home:2,hors:[],hot:6,how:[2,15],howev:2,http:2,i_net:13,ica_load:[],ident:8,idx:[6,8],ight:[],iid:8,imag:[6,7,8,13,15],image_shap:[7,8],image_threshold:8,img:7,img_shap:15,imgfil:[7,8],implement:[13,15],includ:[1,6],independ:8,index:[1,5,6,8,15],inf:[6,7,15],infer:[],inference_arg:[10,11,12],inference_method:12,inference_r:12,influenc:13,info:[8,13],inial:15,init:15,init_h:13,init_inf:12,init_infer:12,init_inference_arg:[10,11],init_inference_sampl:13,init_learning_arg:[10,11],init_rng:15,init_variational_infer:12,init_weight:15,initi:[12,13,15],inp:15,input:[6,12,13,15],input_kei:15,input_net:13,input_net_aux:13,inspir:13,instal:[],instanc:13,instanti:12,instead:[8,10,13],instruct:2,int8:15,integ:[6,8],intend:1,inter:13,inter_net:13,interchang:15,interest:5,invari:13,invers:15,irvi:[],is_continu:13,iscal:8,issu:1,itemlist:15,iter:[6,7,8,12,13,15],itself:12,jbornschein:13,join:15,just:[12,13,15],keep:13,kei:[6,8,10,13,15],keyval:15,keyword:[5,8,12,13,15],kl_diverg:13,kwarg:[6,7,8,10,12,13,15],kyunghyun:15,l1_decai:[11,13],l2_decai:[10,11,13],lab:8,label:[6,8],label_mod:[],labl:6,lai:15,lambda:13,laplac:13,larger:12,last:[12,13,15],lat_opposit:5,latent:13,later:5,latest:2,layer:[],learn:[10,12,13,15],learning_arg:[10,11,15],learning_r:[10,11,15],learning_rate_schedul:[10,11,15],learning_schedul:[],left:5,len:13,length:[5,8],less:[],level:[13,15],lfmlp:[],like:15,limit:[7,8],line:[0,4,5,10,11,15],link:13,list:[4,5,6,8,12,13,15],load:[4,6,15],load_data:6,load_data_split:6,load_experi:15,load_model:[13,15],load_mri:[],load_nifti:4,local:[2,10],log:[10,11,13,15],log_:13,log_b:13,log_factor:15,log_margin:13,log_mean_exp:15,log_prob_scal:[],log_sigma:13,log_sum_exp:15,log_w:[],log_z:13,log_za:[],logger:[],logist:13,logit:15,loop:15,lower:12,lr_cm:5,lstm:[],machin:[1,13],made:6,main:[3,4,5,8,15],main_loop:15,make:[6,8,15],make_argument_pars:[4,5,8,15],make_argument_parser_test:15,make_bullsey:7,make_circl:7,make_condit:13,make_dataset:6,make_ex:7,make_fibr:7,make_imag:8,make_mod:7,make_one_hot:6,make_spir:7,manag:2,mani:15,manual:2,margin:13,mask:[4,8,13],match:13,math:[],matric:15,matrix:8,matter:5,mean:[6,15],mean_imag:[6,13],meant:[1,13,15],medfilt:8,median:8,method:[1,6,10,12,13,15],metric:5,mlp:[],mlp_factori:13,mnist:[],mode:[6,7,8,10,13,15],model:[],model_arg:[12,13],model_dict:15,model_fil:15,model_to_load:[10,11,15],modelclass:15,momentum:[12,15],momentum_gdir:12,momentumgdir:12,monitor:[],montag:[7,8],more:[5,13,15],most:2,mri:[],mri_tmp:8,multilay:13,multimodalmlp:[],multinomi:13,multipl:[8,13,15],multiprocess:8,must:[6,13,15],must_sampl:13,n_chain:[10,11],n_inference_sampl:12,n_inference_step:12,n_label:6,n_layer:[13,14],n_param:13,n_point:7,n_posterior_sampl:[10,11,12],n_sampl:[7,13,14,15],n_step:[10,11,13,14,15],name:[4,5,6,7,8,10,11,12,13,15],nan:15,ndar:15,ndarrai:15,ndim:15,necessari:2,need:[1,2,5,8,12,15],neg:[12,13],neg_log_prob:13,net:[13,15],network:[1,13,15],neural:[1,15],neuroimag:[],next:[6,7,8],nibabel:2,nice:15,nifti:[4,5,8],nifti_fil:8,nifti_view:[],nii:8,nin:15,nipi:[2,5,8],nitfi:8,nll:[10,11,13],nnet:[13,14],nois:15,non:15,non_seq:15,none:[4,5,6,7,8,10,11,12,13,14,15],norm_weight:15,normal:15,note:[12,15],notprocess:8,nout:15,novel:[],npy:8,npz:15,number:[6,8,12,13,15],numer:15,numpi:[4,6,7,8,13,15],o_net:13,object:[6,7,12,13,15],off:13,often:15,old:15,olin:0,one_hot:[],onli:[0,2,5,6,8,12,13,15],oper:[13,15],oppos:13,opposit:5,optim:[10,11,15],optimizer_arg:[10,11,15],option:[4,5,6,8,10,12,13,15],order:[8,13,15],ordereddict:[10,12,13,15],orderedupd:[12,13,15],origin:15,ortho:15,ortho_weight:15,other:[5,13],ouput:8,out:[2,12,15],out_act:13,out_dir:[4,8],out_fil:[5,8,15],out_path:[4,7,8,10,11,15],out_txt:5,output:[4,7,8,10,12,13,15],output_everi:15,output_net:13,output_pixel_v:15,outputs_info:15,over:6,own:[13,15],p_y_given_h:13,pair:[5,6,8],param:[12,13,15],paramet:[4,5,6,7,8,10,12,13,15],params_inf:12,parent:13,pars:4,parser:15,partial:0,particular:[2,5],partit:13,parzen:[13,15],parzen_estim:15,parzenestim:13,pass:[12,15],pass_gradi:12,path:[4,5,7,8,10,15],patient:8,pattern:4,pca:8,pca_compon:8,per:15,perceptron:13,perform:[12,13],persist:[10,11],perviou:15,ph_v:13,pickl:[7,8],pil:[7,15],pip:2,pixel:15,plan:8,pleas:1,plot:15,plot_map:8,point:[7,13],portabl:[],posit:6,post:6,posterior:[12,13],preact:13,preactiv:13,predefin:6,prepar:13,preprocess:[8,10,11,15],preprocessor:[],present:15,presum:[],pretrain:[10,13,15],pretrained_kwarg:15,previou:[13,15],primari:6,print:[8,15],print_profil:15,print_sect:15,prior:[10,11,13,15],prob:13,probabilist:13,probabl:[5,13],probil:13,problem:15,proc_list:15,procedur:[12,15],process:[5,15],progress:[],project:1,prototyp:[],prototype_sampl:13,prototype_shap:[],provid:13,pull:[2,13,15],pure:1,purpos:0,push:15,pv_h:13,python:[1,2,10,11],pyyaml:2,query_yes_no:15,question:15,quickli:13,r_h:13,r_h_a:13,r_h_b:13,r_v:13,rac:[],rais:15,random:[6,7,8,13],randomstream:[12,13,15],rank:[],rapid:1,rate:[10,12,13,15],rather:[12,15],ratio:6,raw_input:15,rbm:[],rbm_mnist:[],rbm_ni:[],rbm_olin:11,rbm_visible_log_sigma:11,rdevon:2,read:[4,5,8,13],read_fmri:[],read_nifti:4,readlin:15,rec_arg:[10,11,13],reccur:13,recognit:13,recognition_network:12,recommend:2,reconstruct:13,recurr:13,reduc:15,refin:12,region:5,relax:15,relev:13,reload:15,reload_model:15,remov:15,remove_nifti:8,reorder:8,repeat:[2,8],replac:[1,15],replic:6,repo:15,repositori:2,request:1,requir:[],reset:[6,7],reshap:15,reshape_imag:7,resolv:[6,8,12,13,15],resolve_dataset:6,resolve_path:15,restrict_digit:7,result:[10,12,13,15],return_prob:13,return_region:5,reweight:[10,12],right:[2,5],rmsprop2:15,rmsprop:[10,11,15],rng:15,rnn:[],rnn_arg:13,roi:[],roi_dict:[5,8],roi_fil:8,roidict:[],routin:[4,15],row:15,rtype:15,run:[0,2,8,13,15],run_classifier_demo:10,run_demo:[10,11],run_rbm_demo:10,run_rbm_olin_demo:11,run_rbm_vbm_demo:11,run_vae_demo:10,rval:15,safe:[],said:8,same:15,sampl:[6,7,8,12,13,15],sample_from_prior:13,sample_posterior:12,save:[4,6,7,8,13,15],save_help:8,save_imag:[6,7,8,10,11,15],save_mask:4,save_nifti:8,save_roi_txt:5,save_stat:15,save_stats_valid:15,sbn:13,scalar:[12,15],scale:[8,13,15],scale_for_energy_model:13,scale_rows_to_unit_interv:15,scale_to_unit_interv:15,scaling_with_input:13,scalingwithinput:13,scan:[8,12,13,15],schedul:[10,13,15],script:[1,2,3,5,8,10,11,15],second:15,section:15,see:[6,10,12,13,15],self:8,seq:15,sequenc:[8,15],set:[5,6,13,15],set_experi:15,set_model:15,set_net_param:13,set_optim:15,set_param:[13,15],set_tparam:[13,15],setter:15,setup:[0,2,3,15],setup_custom_logg:15,sever:0,sgd:[10,11,15],shape:[7,8,13,15],share:[12,13,15],sharedrandomstream:15,should:[5,13,15],show:7,show_everi:[11,15],shuffl:[6,7,8,15],shuffle_column:15,side:5,sigma:13,sigmoid:[13,14],sign:10,silhoett:1,silhouett:7,sim:[],simpl:[7,13,15],simple_displai:15,simplemonitor:15,simplernn:13,simpli:2,simtb:[],singl:[8,13],site:[4,8],size:[6,8,13],sklearn:[2,8],sleep:12,slowdown:15,snp:[],softplu:14,some:15,sourc:[3,4,5,6,7,8,10,11,12,13,14,15],source_dir:4,space:[7,13],special:15,specif:1,specifi:2,split:[6,13,15],split_param:13,split_prob:13,srng:15,stabl:15,standard_prob:13,start:13,stat:[8,15],state:[13,15],statist:8,std:13,std_log_z:13,step:[12,13,15],step_cal:13,step_fe:13,step_free_energi:13,step_free_energy_h:13,step_gibb:13,step_gibbs_ai:13,step_inf:12,step_kl_diverg:13,step_neg_log_prob:13,step_ph_v:13,step_preact:13,step_pv_h:13,step_sampl:13,step_sample_preact:13,step_sh_v:13,step_sv_h:13,stochast:15,stop:[6,7],str:[4,5,6,7,8,10,12,13,15],strict:15,stride:[8,12],string:[5,6,13,15],subclass:[13,15],subjec:8,subject:8,submodul:[],subnet:13,substr:15,suggest:1,suitabl:15,sum:[13,15],sum_prob:13,summar:15,summari:12,support:[1,5,13],t_out:15,take:[12,13,15],target:13,templat:[1,8,15],temporari:8,tensor:[12,13,15],tensor_list:15,tensori:13,tesnor:13,test:[],test_autoregressor:14,test_batch_s:6,test_build:14,test_build_gbn:14,test_cal:14,test_darn:[],test_everi:[10,11,15],test_feed_forward:14,test_lfmlp:[],test_make_mlp:14,test_mlp:[],test_rbm:[],test_recurr:14,test_rnn:[],test_sampl:14,test_va:[],texcol:8,text:[8,15],than:12,theano:[1,2,12,13,15],thei:13,thi:[2,5,6,8,10,12,13,15],thing:15,those:15,thr:[5,8],threshold:[5,8],through:[6,13,15],tile:15,tile_raster_imag:15,tile_shap:15,tile_spac:15,time:2,tmp_path:8,todo:[5,8,13],tool:[],toproi:5,total:6,tparam:15,train:[],train_batch_s:6,trainabl:13,transform:15,transit:13,translat:7,transpos:7,treat:8,treshold:8,trng:15,tshape:7,tupl:[5,7,8,13,15],type:[4,5,6,7,8,12,13,15],typic:[12,15],uci:[],under:1,understand:15,unit:13,unpack:[12,13,15],unpack_inf:12,unzip:15,updat:[2,12,13,15],update_dict_of_list:15,update_partition_funct:13,update_valid:15,upgrad:2,upperbound:10,url:15,use_all_sampl:12,user:[2,8],usual:6,util:[],v_dist:13,v_k:[],v_neg_log_prob:13,vae:[],vae_mnist:10,vae_mri:11,valid:[6,7,10,15],valid_batch_s:[6,10,11],valid_kei:[10,11,15],valid_sign:[10,11,15],validation_arg:15,valu:[6,13,15],var_dlogz:[],variabl:[12,13,15],varianc:13,variat:[1,12],varieti:12,vbm:[0,8],vector:8,verbos:15,veri:1,version:[2,13,15],via:15,view:[8,15],vis_util:[],visibl:13,visual:[6,7,8,12,13,15],visualize_lat:13,viz:8,w_a:13,w_b:13,wai:15,wake:12,want:2,war:13,warn:15,warn_kwarg:15,web:[],weight:[13,15],weight_nois:15,weight_scal:15,well:[1,13,15],when:[1,6],where:8,whether:13,which:[8,13,15],who:6,whose:[13,15],width:15,window:[8,14,15],work:13,worker_help:5,wrap:13,wrapper:15,write:15,write_path_conf:15,x_limit:[7,8],y_hat:[],yaml:[8,10,11,15],yaml_fil:[10,11],yield:15,you:[0,1,2,8],your:2,zero:6,zip:15,zipp:15},titles:["Demos","Cortex documentation","Installation","cortex package","cortex.analysis package","cortex.analysis.mri package","cortex.datasets package","cortex.datasets.basic package","cortex.datasets.neuroimaging package","cortex.demos package","cortex.demos.demos_basic package","cortex.demos.demos_neuroimaging package","cortex.inference package","cortex.models package","cortex.models.tests package","cortex.utils package","cortex"],titleterms:{air:12,analysi:[4,5],basic:[2,7],caltech:7,cifar:7,classifi:10,content:[3,4,5,6,7,8,9,10,11,12,13,14,15],cortex:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16],cost:[],darn:13,dataset:[6,7,8],deep_helmholtz:13,demo:[0,9,10,11],demos_bas:10,demos_neuroimag:11,distribut:13,document:[1,2],euclidean:7,eval_rbm:10,extra:15,featur:1,fmri:8,gdir:12,gru:13,helmholtz:13,hors:7,indic:1,infer:12,instal:2,irvi:12,layer:13,learning_schedul:15,load_mri:4,logger:15,lstm:13,mlp:13,mnist:7,model:[13,14],modul:[3,4,5,6,7,8,9,10,11,12,13,14,15],monitor:15,mri:[5,8],neuroimag:[2,8],nifti_view:8,packag:[3,4,5,6,7,8,9,10,11,12,13,14,15],preprocessor:15,rbm:13,rbm_mnist:10,rbm_ni:11,read_fmri:4,requir:2,rnn:13,roi:5,simtb:8,snp:8,submodul:[4,5,7,8,10,11,12,13,14,15],subpackag:[3,4,6,9,13],tabl:1,test:14,test_darn:14,test_lfmlp:[],test_mlp:14,test_rbm:14,test_rnn:14,test_va:14,tool:15,train:15,tutori:1,uci:7,util:15,vae:[10,11],vis_util:15}})